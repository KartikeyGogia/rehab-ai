import { useState } from "react";
import { useNavigate } from "react-router-dom";

const exercises = [
  {
    id: 1,
    name: "Ankle Mobility",
    category: "Ankle",
    level: "Beginner",
    duration: "5 min",
    description:
      "Gentle movements designed to improve ankle mobility and restore comfortable range of motion.",
    instructions: [
      "Sit comfortably with your foot supported.",
      "Slowly move your ankle through a comfortable range.",
      "Avoid forcing the movement into pain.",
      "Repeat for 10–15 controlled movements.",
    ],
  },
  {
    id: 2,
    name: "Calf Stretch",
    category: "Lower Leg",
    level: "Beginner",
    duration: "5 min",
    description:
      "A gentle calf stretch that can help maintain flexibility around the ankle and lower leg.",
    instructions: [
      "Stand facing a wall and place your hands against it.",
      "Step one foot back while keeping the heel down.",
      "Keep the back leg comfortably straight.",
      "Hold the stretch for 20–30 seconds.",
    ],
  },
  {
    id: 3,
    name: "Quad Strengthening",
    category: "Knee",
    level: "Beginner",
    duration: "8 min",
    description:
      "Controlled strengthening exercise targeting the quadriceps muscles.",
    instructions: [
      "Sit or lie comfortably with your leg extended.",
      "Tighten the muscles at the front of your thigh.",
      "Hold the contraction for a few seconds.",
      "Relax and repeat 10–15 times.",
    ],
  },
  {
    id: 4,
    name: "Straight Leg Raise",
    category: "Knee",
    level: "Intermediate",
    duration: "10 min",
    description:
      "A controlled strengthening movement commonly used during lower-limb rehabilitation.",
    instructions: [
      "Lie comfortably on your back.",
      "Keep one knee bent and the other leg straight.",
      "Tighten your thigh and slowly raise the straight leg.",
      "Lower it slowly and repeat.",
    ],
  },
  {
    id: 5,
    name: "Shoulder Pendulum",
    category: "Shoulder",
    level: "Beginner",
    duration: "5 min",
    description:
      "A gentle movement that encourages comfortable shoulder mobility.",
    instructions: [
      "Support yourself with one hand on a stable surface.",
      "Allow the affected arm to hang comfortably.",
      "Make small controlled circular movements.",
      "Keep the movement gentle and pain-free.",
    ],
  },
  {
    id: 6,
    name: "Cat-Cow Stretch",
    category: "Back",
    level: "Beginner",
    duration: "5 min",
    description:
      "A controlled mobility exercise for the spine and surrounding muscles.",
    instructions: [
      "Start on your hands and knees.",
      "Slowly round your back.",
      "Then gently move toward a comfortable extended position.",
      "Repeat slowly while maintaining controlled breathing.",
    ],
  },
];

function ExercisesPage() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [completed, setCompleted] = useState([]);

  const categories = [
    "All",
    "Ankle",
    "Knee",
    "Shoulder",
    "Back",
    "Lower Leg",
  ];

  const filteredExercises =
    selectedCategory === "All"
      ? exercises
      : exercises.filter(
          (exercise) => exercise.category === selectedCategory
        );

  const markCompleted = (id) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFA] text-[#173D47]">


      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <div>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-sm text-gray-500 hover:text-[#173D47]"
            >
              ← Dashboard
            </button>

            <h1 className="mt-2 text-2xl font-bold">
              Exercise Library
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Rehabilitation exercises and movement guidance
            </p>
          </div>

          <button
            onClick={() => navigate("/ai-coach")}
            className="rounded-lg bg-[#F67D72] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ef6c61]"
          >
            Ask AI Coach
          </button>

        </div>
      </header>



      <main className="mx-auto max-w-7xl px-8 py-10">


        <div className="border border-gray-200 bg-white px-6 py-5">
          <p className="text-sm leading-6 text-gray-600">
            These exercises are provided for general educational purposes.
            Exercise selection should be appropriate for your condition and
            recovery stage. Stop an exercise if it causes significant pain
            and consult a qualified healthcare professional when needed.
          </p>
        </div>



        <section className="mt-10">

          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border px-5 py-2.5 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "border-[#173D47] bg-[#173D47] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#173D47]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </section>



        <section className="mt-8">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filteredExercises.map((exercise) => {

              const isCompleted = completed.includes(exercise.id);

              return (
                <div
                  key={exercise.id}
                  className="border border-gray-200 bg-white p-6"
                >

                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#F67D72]">
                        {exercise.category}
                      </p>

                      <h2 className="mt-2 text-xl font-semibold">
                        {exercise.name}
                      </h2>
                    </div>

                    {isCompleted && (
                      <span className="text-xs font-medium text-green-600">
                        Completed
                      </span>
                    )}

                  </div>


                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {exercise.description}
                  </p>


                  <div className="mt-5 flex gap-4 text-xs text-gray-500">
                    <span>{exercise.level}</span>
                    <span>•</span>
                    <span>{exercise.duration}</span>
                  </div>


                  <div className="mt-6 flex gap-3">

                    <button
                      onClick={() => setSelectedExercise(exercise)}
                      className="flex-1 border border-gray-200 py-3 text-sm font-medium transition hover:border-[#173D47]"
                    >
                      View Instructions
                    </button>

                    <button
                      onClick={() => markCompleted(exercise.id)}
                      className={`px-4 py-3 text-sm font-medium ${
                        isCompleted
                          ? "bg-green-50 text-green-600"
                          : "bg-[#173D47] text-white hover:bg-[#204e5a]"
                      }`}
                    >
                      {isCompleted ? "Done" : "Complete"}
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        </section>



        {selectedExercise && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

            <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto bg-white p-8">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#F67D72]">
                    {selectedExercise.category}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    {selectedExercise.name}
                  </h2>

                </div>

                <button
                  onClick={() => setSelectedExercise(null)}
                  className="text-2xl text-gray-400 hover:text-gray-700"
                >
                  ×
                </button>

              </div>


              <p className="mt-5 text-sm leading-7 text-gray-600">
                {selectedExercise.description}
              </p>


              <h3 className="mt-8 font-semibold">
                Instructions
              </h3>

              <ol className="mt-4 space-y-4">

                {selectedExercise.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-sm leading-6 text-gray-600"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFE8E5] text-xs font-semibold text-[#F67D72]">
                        {index + 1}
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}

              </ol>


              <div className="mt-8 flex gap-3">

                <button
                  onClick={() => {
                    markCompleted(selectedExercise.id);
                    setSelectedExercise(null);
                  }}
                  className="flex-1 bg-[#173D47] py-3 text-sm font-semibold text-white"
                >
                  Mark as Completed
                </button>

                <button
                  onClick={() => setSelectedExercise(null)}
                  className="border border-gray-200 px-6 py-3 text-sm font-medium"
                >
                  Close
                </button>

              </div>

            </div>

          </div>
        )}

      </main>

    </div>
  );
}

export default ExercisesPage;