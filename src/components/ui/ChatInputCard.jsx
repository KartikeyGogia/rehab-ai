import { useState } from "react";
import { MessageSquare } from "lucide-react";

function ChatInputCard({ onAnalyze, loading }) {
  const [symptoms, setSymptoms] = useState("");
  const [painLevel, setPainLevel] = useState(5);
  const [duration, setDuration] = useState("");

  const handleAnalyze = (e) => {
    e.preventDefault();

    if (!symptoms.trim()) {
      alert("Please describe your symptoms first.");
      return;
    }

    onAnalyze({
      symptoms,
      painLevel,
      duration,
    });
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">


      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE8E5]">
          <MessageSquare className="h-6 w-6 text-[#F67D72]" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#173D47]">
            Ask RehabAI
          </h3>

          <p className="text-sm text-gray-500">
            AI Rehabilitation Assistant
          </p>
        </div>

      </div>



      <div className="mt-10">

        <label className="mb-3 block text-sm font-semibold text-[#173D47]">
          Describe your symptoms
        </label>

        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Example:
I twisted my ankle while playing football yesterday. It hurts on the outside when I walk and I have mild swelling."
          className="h-36 w-full resize-none rounded-2xl border border-gray-200 p-4 text-gray-700 outline-none transition focus:border-[#F67D72]"
        />

      </div>



      <div className="mt-8">

        <div className="flex items-center justify-between">

          <label className="mb-3 block text-sm font-semibold text-[#173D47]">
            Pain Level
          </label>

          <span className="text-sm font-semibold text-[#F67D72]">
            {painLevel}/10
          </span>

        </div>

        <input
          type="range"
          min="0"
          max="10"
          value={painLevel}
          onChange={(e) => setPainLevel(Number(e.target.value))}
          className="w-full accent-[#F67D72]"
        />

      </div>


      
      <div className="mt-8">

        <label className="mb-3 block text-sm font-semibold text-[#173D47]">
          Injury Duration
        </label>

        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-white p-4 outline-none transition focus:border-[#F67D72]"
        >

          <option value="">
            Select Duration
          </option>

          <option value="Today">
            Today
          </option>

          <option value="1–3 Days">
            1–3 Days
          </option>

          <option value="1 Week">
            1 Week
          </option>

          <option value="2 Weeks">
            2 Weeks
          </option>

          <option value="More than 1 Month">
            More than 1 Month
          </option>

        </select>

      </div>


     

      <button
        type="button"
        disabled={loading}
        onClick={handleAnalyze}
        className="mt-10 w-full rounded-2xl bg-[#F67D72] py-4 text-lg font-semibold text-white transition hover:bg-[#ef6c61] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Analyzing..." : "Analyze Symptoms"}
      </button>

    </div>
  );
}

export default ChatInputCard;