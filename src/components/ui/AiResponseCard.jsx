import {
  Bot,
  CheckCircle,
  Activity,
  Dumbbell,
} from "lucide-react";

function AIResponseCard({ analysis, loading }) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F8FF]">
            <Bot className="h-6 w-6 text-[#00A6D6]" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#173D47]">
              AI Clinical Insight
            </h3>

            <p className="text-sm text-gray-500">
              Analyzing the information you provided...
            </p>
          </div>

        </div>

        <div className="mt-10 space-y-4">

          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-100" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-100" />

        </div>

      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F8FF]">
            <Bot className="h-6 w-6 text-[#00A6D6]" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#173D47]">
              AI Clinical Insight
            </h3>

            <p className="text-sm text-gray-500">
              Your AI-assisted rehabilitation analysis will appear here.
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-xl bg-gray-50 p-6">

          <p className="text-sm leading-6 text-gray-500">
            Describe your symptoms and click "Analyze Symptoms" to
            receive general rehabilitation guidance.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">


      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F8FF]">
          <Bot className="h-6 w-6 text-[#00A6D6]" />
        </div>

        <div>

          <h3 className="text-2xl font-semibold text-[#173D47]">
            AI Clinical Insight
          </h3>

          <p className="text-sm text-gray-500">
            AI-assisted rehabilitation guidance based on your information.
          </p>

        </div>

      </div>



      {analysis.summary && (
        <div className="mt-8">

          <h4 className="text-lg font-semibold text-[#173D47]">
            Assessment
          </h4>

          <p className="mt-3 leading-7 text-gray-700">
            {analysis.summary}
          </p>

        </div>
      )}



      {analysis.possibleConditions?.length > 0 && (
        <div className="mt-8">

          <h4 className="text-lg font-semibold text-[#173D47]">
            Possible Explanations
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            These are possibilities based on the information provided,
            not a medical diagnosis.
          </p>

          <div className="mt-5 space-y-3">

            {analysis.possibleConditions.map((condition, index) => (

              <div
                key={index}
                className="flex items-center gap-3 rounded-xl bg-green-50 p-3"
              >

                <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />

                <span className="font-medium text-gray-700">
                  {condition}
                </span>

              </div>

            ))}

          </div>

        </div>
      )}



      {analysis.recommendations?.length > 0 && (
        <div className="mt-8">

          <div className="mb-4 flex items-center gap-2">

            <Activity className="h-5 w-5 text-[#F67D72]" />

            <h4 className="text-lg font-semibold text-[#173D47]">
              Recommended Next Steps
            </h4>

          </div>

          <div className="space-y-3">

            {analysis.recommendations.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3"
              >

                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />

                <span className="text-gray-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>
      )}



      {analysis.exercises?.length > 0 && (
        <div className="mt-8">

          <div className="mb-4 flex items-center gap-2">

            <Dumbbell className="h-5 w-5 text-[#F67D72]" />

            <h4 className="text-lg font-semibold text-[#173D47]">
              General Exercise Suggestions
            </h4>

          </div>

          <div className="space-y-3">

            {analysis.exercises.map((exercise, index) => (

              <p
                key={index}
                className="text-gray-700"
              >
                • {exercise}
              </p>

            ))}

          </div>

        </div>
      )}


      

      {analysis.warningSigns?.length > 0 && (
        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5">

          <h4 className="font-semibold text-red-700">
            When to seek medical care
          </h4>

          <ul className="mt-3 space-y-2">

            {analysis.warningSigns.map((warning, index) => (

              <li
                key={index}
                className="text-sm leading-6 text-red-700"
              >
                • {warning}
              </li>

            ))}

          </ul>

        </div>
      )}


      

      <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">

        <p className="text-sm leading-6 text-yellow-800">

          <strong>Disclaimer:</strong>{" "}
          This AI-generated information is for educational purposes
          and does not provide a medical diagnosis. Consult a qualified
          healthcare professional for an appropriate evaluation and
          treatment plan.

        </p>

      </div>

    </div>
  );
}

export default AIResponseCard;