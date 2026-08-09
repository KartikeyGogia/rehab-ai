import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    features: [
      "AI Symptom Checker",
      "Exercise Library",
      "Basic Progress Tracking",
      "Community Support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    features: [
      "Everything in Free",
      "AI Clinical Assistant",
      "Medical Report Analysis",
      "Personalized Rehab Plans",
      "Progress Analytics",
      "Unlimited AI Chats",
    ],
    featured: true,
  },
  {
    name: "Clinic",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Doctor Dashboard",
      "Multiple Patients",
      "Appointments",
      "Analytics",
      "Priority Support",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <div className="text-center">

  <span className="inline-flex items-center rounded-full bg-[#FFE8E5] px-4 py-2 text-sm font-medium text-[#F67D72]">
    Pricing
  </span>

  <h2 className="mt-6 text-5xl font-bold text-[#173D47]">
    Simple & Transparent Pricing
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
    Choose the perfect plan for your recovery journey or your rehabilitation clinic.
  </p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">
    
    {plans.map((plan) => (
  <div
  
    key={plan.name}
    className={`relative rounded-3xl border p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
      plan.featured
        ? "border-[#F67D72] bg-[#FFF8F7]"
        : "border-gray-200 bg-white"
    }`}
  >
    {plan.featured && (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#F67D72] px-5 py-2 text-sm font-semibold text-white shadow-lg">
    Most Popular
  </div>
)}

<h3 className="text=3xl font-bold text-[#173D47]">
    {plan.name}
</h3>

<div className="mt-6 flex items-end gap-2">

  <span className="text-5xl font-bold text-[#173D47]">
    {plan.price}
  </span>

  <span className="pb-1 text-gray-500">
    {plan.period}
  </span>

</div>
<div className="mt-10 space-y-4">

  {plan.features.map((feature) => (
    <div
      key={feature}
      className="flex items-center gap-3"
    >
      <Check className="h-5 w-5 text-green-500" />

      <span className="text-gray-600">
        {feature}
      </span>

    </div>
  ))}

</div>
<button
  className={`mt-12 w-full rounded-2xl py-4 text-lg font-semibold transition ${
    plan.featured
      ? "bg-[#F67D72] text-white hover:bg-[#ef6c61]"
      : "border border-[#F67D72] text-[#F67D72] hover:bg-[#F67D72] hover:text-white"
  }`}
>
  {plan.featured ? "Start Free Trial" : "Get Started"}
</button>

  </div>
))}
    </div>

      </div>
    </section>
  );
}

export default Pricing;