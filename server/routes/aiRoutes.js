const express = require("express");

const router = express.Router();



router.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        message: "Messages are required",
      });
    }

    const systemMessage = {
      role: "system",
      content: `
You are RehabAI, an AI-assisted rehabilitation education assistant.

Provide general rehabilitation education and recovery guidance.

Important rules:
- Do not diagnose medical conditions.
- Do not claim certainty.
- Do not prescribe medication.
- Do not replace a doctor or physiotherapist.
- Recommend professional medical evaluation when appropriate.
- If the user describes serious symptoms, recommend prompt medical attention.
- Keep answers clear and easy for patients to understand.
      `,
    };

    const recentMessages = messages
      .filter(
        (message) =>
          message.role === "user" ||
          message.role === "assistant"
      )
      .slice(-10);

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },

        body: JSON.stringify({
          model: "openai/gpt-oss-20b",

          messages: [
            systemMessage,
            ...recentMessages,
          ],

          temperature: 0.3,
          max_tokens: 700,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", data);

      return res.status(500).json({
        message: "AI service request failed",
      });
    }

    const aiMessage =
      data.choices?.[0]?.message?.content;

    if (!aiMessage) {
      return res.status(500).json({
        message: "No response received from AI",
      });
    }

    res.json({
      message: aiMessage,
    });

  } catch (error) {
    console.error("AI chat error:", error);

    res.status(500).json({
      message: "Unable to process AI request",
    });
  }
});


// ==========================================
// SYMPTOM ANALYSIS
// ==========================================

router.post("/analyze", async (req, res) => {
  try {
    const {
      symptoms,
      painLevel,
      duration,
    } = req.body;

    console.log("Received analysis request:");
    console.log({
      symptoms,
      painLevel,
      duration,
    });

    if (!symptoms || !symptoms.trim()) {
      return res.status(400).json({
        message: "Symptoms are required",
      });
    }

    const prompt = `
You are RehabAI, an AI-assisted rehabilitation education assistant.

The user provided the following information:

Symptoms:
${symptoms}

Pain level:
${painLevel}/10

Injury duration:
${duration || "Not specified"}

Provide general rehabilitation education based on this information.

IMPORTANT SAFETY RULES:

- Do NOT diagnose the patient.
- Do NOT claim that a condition is definitely present.
- Do NOT provide a confidence percentage.
- Do NOT prescribe medication.
- Do NOT replace a doctor or physiotherapist.
- Recommend professional evaluation when appropriate.
- Mention warning signs that require medical attention.
- Exercise suggestions should be conservative and general.
- If there is insufficient information, say so.

Return ONLY valid JSON.

Use exactly this structure:

{
  "summary": "Short explanation of what the symptoms may indicate without making a diagnosis.",
  "possibleConditions": [
    "possible explanation 1",
    "possible explanation 2"
  ],
  "recommendations": [
    "general recommendation 1",
    "general recommendation 2",
    "general recommendation 3"
  ],
  "exercises": [
    "general exercise suggestion 1",
    "general exercise suggestion 2"
  ],
  "warningSigns": [
    "warning sign 1",
    "warning sign 2"
  ]
}
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },

        body: JSON.stringify({
          model: "openai/gpt-oss-20b",

          messages: [
            {
              role: "system",
              content:
                "You are a careful rehabilitation education assistant. Always return valid JSON.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],

          temperature: 0.2,
          max_tokens: 900,

          response_format: {
            type: "json_object",
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq analysis error:", data);

      return res.status(500).json({
        message: "AI analysis service failed",
      });
    }

    const content =
      data.choices?.[0]?.message?.content;

    if (!content) {
      return res.status(500).json({
        message: "AI returned an empty response",
      });
    }

    let analysis;

    try {
      analysis = JSON.parse(content);
    } catch (error) {
      console.error("Failed to parse AI JSON:", content);

      return res.status(500).json({
        message: "AI returned an invalid response",
      });
    }

    res.json({
      analysis,
    });

  } catch (error) {
    console.error("Analysis route error:", error);

    res.status(500).json({
      message: "Unable to analyze symptoms",
    });
  }
});


module.exports = router;