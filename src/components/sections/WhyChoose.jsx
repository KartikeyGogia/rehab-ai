import {
  Brain,
  FileText,
  Activity,
  Video,
  ShieldCheck,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "AI Diagnosis Assistant",
    description:
      "Describe symptoms and receive AI-powered clinical insights with medical disclaimers.",
    icon: Brain,
  },
  {
    title: "Medical Report Analysis",
    description:
      "Upload medical reports and receive AI-powered analysis with easy-to-understand explanations.",
    icon: FileText,
  },
  {
    title: "Recovery Tracking",
    description:
      "Monitor pain levels, mobility, exercise completion, and overall recovery progress.",
    icon: Activity,
  },
  {
    title: "Exercise Video Analysis",
    description:
      "Upload exercise videos and receive posture correction powered by AI.",
    icon: Video,
  },
  {
    title: "Medical Knowledge (RAG)",
    description:
      "AI answers questions using trusted rehabilitation protocols and medical literature.",
    icon: ShieldCheck,
  },
  {
    title: "Doctor Dashboard",
    description:
      "Physiotherapists can monitor patients, assign exercises, and review progress.",
    icon: LayoutDashboard,
  },
];

function WhyChoose() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        

        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-[#FFE8E5] px-4 py-2 text-sm font-medium text-[#F67D72]">
            Why RehabAI
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#173D47]">
            Built for Modern Rehabilitation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            RehabAI combines artificial intelligence, rehabilitation science,
            and real-time patient monitoring into one intelligent platform
            for patients, athletes, physiotherapists, and clinics.
          </p>

        </div>

    

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFE8E5] transition group-hover:bg-[#F67D72]">

                  <Icon className="h-8 w-8 text-[#F67D72] transition group-hover:text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#173D47]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-[#F67D72] transition group-hover:gap-3">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;