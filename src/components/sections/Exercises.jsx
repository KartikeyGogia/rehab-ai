import { useState } from "react";
import { Clock3 } from "lucide-react";

const categories = [
  "Shoulder",
  "Ankle",
  "Back",
  "Knee",
  "Neck",
  "Hip",
  "Lower Back",
];

const exercises = [
  {
    id: 1,
    title: "Shoulder Recovery",
    image: "/images/shoulder.jpg",
    exercises: 24,
    duration: "7 Min",
    level: "0-1",
    category: "Shoulder",
  },
  {
    id: 2,
    title: "Knee Rehab",
    image: "/images/knee.jpg",
    exercises: 20,
    duration: "43 Min",
    level: "0-1",
    category: "Knee",
  },
  {
    id: 3,
    title: "Ankle Mobility",
    image: "/images/ankle.jpg",
    exercises: 25,
    duration: "33 Min",
    level: "All",
    category: "Ankle",
  },
  {
    id: 4,
    title: "Neck Mobility",
    image: "/images/neck.jpg",
    exercises: 12,
    duration: "32 Min",
    level: "1-2",
    category: "Neck",
  },
  {
    id: 5,
    title: "Hip Strengthening",
    image: "/images/hip.jpg",
    exercises: 15,
    duration: "32 Min",
    level: "1-2",
    category: "Hip",
  },
  {
    id: 6,
    title: "Lower Back Recovery",
    image: "/images/back.jpg",
    exercises: 13,
    duration: "37 Min",
    level: "1-2",
    category: "Lower Back",
  },  
];

function Exercises() {
  const [activeCategory, setActiveCategory] = useState("Lower Back");

  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-[#FFE8E5] px-4 py-2 text-sm font-medium text-[#F67D72]">
            Exercise Library
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#173D47]">
            500+ Clinically Validated Exercises
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Browse rehabilitation programs by body region,
            difficulty level and recovery phase with AI coaching.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-cyan-100 text-cyan-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={exercise.image}
                alt={exercise.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#173D47]">
                  {exercise.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {exercise.exercises} Exercises
                </p>

                <div className="mt-5 flex items-center gap-5 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {exercise.duration}
                  </div>

                  <span>Level {exercise.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 flex justify-center">
          <button className="rounded-full bg-[#F67D72] px-10 py-4 font-medium text-white transition hover:bg-[#ef6c61]">
            Explore All
          </button>
        </div>
      </div>
    </section>
  );
}

export default Exercises;