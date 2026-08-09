import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is RehabAI a replacement for a physiotherapist?",
    answer:
      "No. RehabAI provides AI-assisted rehabilitation guidance and educational information. It should not replace consultation with a qualified healthcare professional.",
  },
  {
    question: "Can I upload MRI reports or X-rays?",
    answer:
      "Yes. RehabAI allows users to upload medical reports for AI-assisted explanations and rehabilitation guidance.",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "Yes. Your uploaded reports and health information are stored securely using encrypted cloud storage and protected authentication.",
  },
  {
    question: "Which injuries does RehabAI support?",
    answer:
      "RehabAI supports common rehabilitation scenarios including ankle sprains, knee injuries, shoulder pain, back pain, neck pain, and post-operative recovery.",
  },
  {
    question: "How does the AI generate recommendations?",
    answer:
      "The AI combines symptom analysis with a retrieval system powered by trusted rehabilitation protocols and medical knowledge to generate personalized guidance.",
  },
];


function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="bg-[#F8FCFD] py-28">
      <div className="mx-auto max-w-5xl px-8">
        <div className="text-center">

  <span className="inline-flex items-center rounded-full bg-[#FFE8E5] px-4 py-2 text-sm font-medium text-[#F67D72]">
    FAQ
  </span>

  <h2 className="mt-6 text-5xl font-bold text-[#173D47]">
    Frequently Asked Questions
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
    Everything you need to know about RehabAI and our AI-powered rehabilitation platform.
  </p>

</div>
<div className="mt-16 space-y-5">
    {faqs.map((faq, index) => (
  <div
    key={index}
    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md"
  >
    <button
    onClick={() => setOpenIndex(openIndex === index ? null : index)
}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        >
            <span className="text-lg font-semibold text-[#173D47]">
                {faq.question}
            </span>
            <ChevronDown
            className={`h-5 w-5 text-gray-500 transition-transform${
                openIndex === index ? " rotate-180" : ""
            }`}
            />
        </button>
    {openIndex === index && (
        <div className="border-t border-gray-100 px-6 pb-6 pt-4">

            <p className="leading-7 text-gray-600">
                {faq.answer}
            </p>
            </div>
    )}
    

  </div>
))}
    </div>

      </div>
    </section>
  );
}

export default FAQ;