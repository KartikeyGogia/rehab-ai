import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AICoach() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the RehabAI assistant. Tell me about your symptoms, injury, or recovery goals and I'll help you understand your next steps.",
    },
  ]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!message.trim()) return;

  const userMessage = {
    role: "user",
    content: message,
  };

  const updatedMessages = [
    ...messages,
    userMessage,
  ];

  setMessages(updatedMessages);
  setMessage("");

  try {
    const response = await axios.post(
      "https://rehabai-api.onrender.com",
      {
        messages: updatedMessages,
      }
    );

    setMessages((previous) => [
      ...previous,
      {
        role: "assistant",
        content: response.data.message,
      },
    ]);
  } catch (error) {
    console.error("AI request failed:", error);

    setMessages((previous) => [
      ...previous,
      {
        role: "assistant",
        content:
          "I'm unable to respond right now. Please try again in a moment.",
      },
    ]);
  }
};

   
    

  return (
    <div className="min-h-screen bg-[#F7FAFA]">


      <header className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <div>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-sm text-gray-500 hover:text-[#173D47]"
            >
              ← Dashboard
            </button>

            <h1 className="mt-2 text-2xl font-bold text-[#173D47]">
              AI Rehab Coach
            </h1>
          </div>

          <span className="text-sm text-gray-500">
            RehabAI
          </span>

        </div>

      </header>


     

      <main className="mx-auto flex max-w-5xl flex-col px-6 py-8">

       

        <div className="border border-gray-200 bg-white px-5 py-4">

          <p className="text-sm leading-6 text-gray-600">
            RehabAI provides AI-assisted educational information and
            general rehabilitation guidance. It does not replace diagnosis
            or treatment from a qualified healthcare professional.
          </p>

        </div>


       

        <div className="mt-6 flex min-h-[550px] flex-col border border-gray-200 bg-white">

         

          <div className="flex-1 space-y-6 overflow-y-auto p-6">

            {messages.map((item, index) => (

              <div
                key={index}
                className={
                  item.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >

                <div
                  className={
                    item.role === "user"
                      ? "max-w-xl bg-[#173D47] px-5 py-4 text-white"
                      : "max-w-xl bg-[#F7FAFA] px-5 py-4 text-gray-700"
                  }
                >

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-60">
                    {item.role === "user"
                      ? "You"
                      : "RehabAI"}
                  </p>

                  <p className="text-sm leading-7">
                    {item.content}
                  </p>

                </div>

              </div>

            ))}

          </div>


          

          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 p-5"
          >

            <div className="flex gap-3">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your symptoms or ask a recovery question..."
                className="flex-1 border border-gray-200 px-4 py-4 text-sm outline-none focus:border-[#F67D72]"
              />

              <button
                type="submit"
                className="bg-[#F67D72] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#ef6c61]"
              >
                Send
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default AICoach;