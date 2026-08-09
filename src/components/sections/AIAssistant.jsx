import { useState } from "react";
import axios from "axios";

import ChatInputCard from "../ui/ChatInputCard";
import AiResponseCard from "../ui/AiResponseCard";

function AIAssistant() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (data) => {
    setLoading(true);
    setAnalysis(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/analyze`,
        data
      );

      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error("AI analysis failed:", error);

      setAnalysis({
        summary:
          "Unable to analyze your symptoms right now. Please try again.",
        possibleConditions: [],
        recommendations: [],
        exercises: [],
        warningSigns: [],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <div className="inline-flex items-center rounded-full bg-[#FFE8E5] px-4 py-2">
            <span className="text-sm font-medium text-[#F67D72]">
              AI Clinical Assistant
            </span>
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-5xl font-bold leading-tight text-[#173D47]">
            Your AI-Powered Rehabilitation Companion
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Describe your symptoms and receive AI-assisted rehabilitation
            guidance based on the information you provide.
          </p>

        </div>

        <div className="mt-20 grid items-start gap-8 lg:grid-cols-2">

          <ChatInputCard
            onAnalyze={handleAnalyze}
            loading={loading}
          />

          <AiResponseCard
            analysis={analysis}
            loading={loading}
          />

        </div>

      </div>
    </section>
  );
}

export default AIAssistant;