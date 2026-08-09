import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F7FAFA] text-[#173D47]">


      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <div>
            <h1 className="text-2xl font-bold">
              RehabAI
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Patient Dashboard
            </p>
          </div>

          <div className="flex items-center gap-6">

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">
                {user.name || "Patient"}
              </p>

              <p className="text-xs text-gray-500">
                {user.email || ""}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Logout
            </button>

          </div>

        </div>
      </header>



      <main className="mx-auto max-w-7xl px-8 py-12">


        <div>
          <p className="text-sm font-medium text-[#F67D72]">
            YOUR RECOVERY
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Welcome back, {user.name || "Patient"}
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Keep track of your rehabilitation progress and continue
            with your recovery plan.
          </p>
        </div>



        <section className="mt-10">

          <h3 className="text-lg font-semibold">
            Recovery Overview
          </h3>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="border border-gray-200 bg-white p-6">
              <p className="text-sm text-gray-500">
                Recovery Progress
              </p>

              <p className="mt-3 text-3xl font-bold">
                68%
              </p>

              <p className="mt-2 text-sm text-green-600">
                Improving
              </p>
            </div>


            <div className="border border-gray-200 bg-white p-6">
              <p className="text-sm text-gray-500">
                Exercises Completed
              </p>

              <p className="mt-3 text-3xl font-bold">
                24
              </p>

              <p className="mt-2 text-sm text-gray-500">
                This month
              </p>
            </div>


            <div className="border border-gray-200 bg-white p-6">
              <p className="text-sm text-gray-500">
                Current Pain
              </p>

              <p className="mt-3 text-3xl font-bold">
                3/10
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Last recorded today
              </p>
            </div>


            <div className="border border-gray-200 bg-white p-6">
              <p className="text-sm text-gray-500">
                Exercise Streak
              </p>

              <p className="mt-3 text-3xl font-bold">
                7 days
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Keep going
              </p>
            </div>

          </div>

        </section>



        <section className="mt-10 border border-gray-200 bg-white p-8">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-lg font-semibold">
                Recovery Progress
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Overall progress based on your recent activity
              </p>
            </div>

            <p className="text-xl font-semibold">
              68%
            </p>

          </div>


          <div className="mt-6 h-3 w-full bg-gray-100">

            <div
              className="h-full bg-[#F67D72]"
              style={{ width: "68%" }}
            />

          </div>


          <div className="mt-3 flex justify-between text-xs text-gray-400">

            <span>Started</span>
            <span>Current</span>

          </div>

        </section>



        <section className="mt-10">

          <h3 className="text-lg font-semibold">
            Continue Your Recovery
          </h3>

          <div className="mt-4 grid gap-4 md:grid-cols-3">



            <button
              onClick={() => navigate("/ai-coach")}
              className="border border-gray-200 bg-white p-7 text-left transition hover:border-[#F67D72]"
            >

              <p className="text-sm font-medium text-[#F67D72]">
                AI COACH
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Get recovery guidance
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Describe your symptoms and get general rehabilitation
                guidance based on your information.
              </p>

              <span className="mt-5 block text-sm font-semibold">
                Open AI Coach →
              </span>

            </button>



            <button
              onClick={() => navigate("/exercises")}
              className="border border-gray-200 bg-white p-7 text-left transition hover:border-[#F67D72]"
            >

              <p className="text-sm font-medium text-[#F67D72]">
                EXERCISES
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                View your exercises
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Review your rehabilitation exercises and keep track
                of the activities you have completed.
              </p>

              <span className="mt-5 block text-sm font-semibold">
                View Exercises →
              </span>

            </button>



            <button
              onClick={() => navigate("/reports")}
              className="border border-gray-200 bg-white p-7 text-left transition hover:border-[#F67D72]"
            >

              <p className="text-sm font-medium text-[#F67D72]">
                MEDICAL REPORTS
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Review your reports
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Upload medical reports and view AI-assisted explanations
                of the information they contain.
              </p>

              <span className="mt-5 block text-sm font-semibold">
                View Reports →
              </span>

            </button>

          </div>

        </section>



        <section className="mt-10 border border-gray-200 bg-white">

          <div className="border-b border-gray-200 px-7 py-5">

            <h3 className="font-semibold">
              Recent Activity
            </h3>

          </div>

          <div className="divide-y divide-gray-100">

            <div className="flex items-center justify-between px-7 py-5">

              <div>
                <p className="font-medium">
                  Knee mobility exercise completed
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Today
                </p>
              </div>

              <span className="text-sm text-green-600">
                Completed
              </span>

            </div>


            <div className="flex items-center justify-between px-7 py-5">

              <div>
                <p className="font-medium">
                  Pain level updated
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Today
                </p>
              </div>

              <span className="text-sm text-gray-500">
                3/10
              </span>

            </div>


            <div className="flex items-center justify-between px-7 py-5">

              <div>
                <p className="font-medium">
                  Recovery progress updated
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Yesterday
                </p>
              </div>

              <span className="text-sm font-medium">
                68%
              </span>

            </div>

          </div>

        </section>



        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-5 text-gray-400">
          RehabAI provides AI-assisted educational and rehabilitation
          information and is not a substitute for diagnosis or treatment
          from a qualified healthcare professional.
        </p>

      </main>

    </div>
  );
}

export default Dashboard;