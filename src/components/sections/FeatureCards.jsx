import { Brain } from "lucide-react";

const features = [
  {
    title: "AI Personalized Therapy",
    description:
      "Personalized recovery plans, powered by AI, to help patients recover faster and smarter.",
    Icon: Brain,
  },
  {
    title: "Exercise Library",
    description:
      "Follow guided rehabilitation exercises with step-by-step instructions.",
    Icon: Brain,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your recovery journey with AI-powered insights and analytics.",
    Icon: Brain,
  },
];

function FeatureCards() {
  return (
    <section className="relative -mt-24 z-20">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.Icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE8E5]">
                  <Icon className="h-7 w-7 text-[#F67D72]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#173D47]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;