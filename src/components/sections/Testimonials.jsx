import { Star } from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        role:"Football Player",
        review: "RehabAI helped me recover from my ankle injury faster than I expected. The AI assistant provided personalized exercises and tracked my progress effectively.",
    },
    {
        name: "Jane Smith",
        role:"Physiotherapist",
        review: "As a physiotherapist, I found RehabAI to be an invaluable tool for my patients. The AI assistant's recommendations are evidence-based and easy to follow, making rehabilitation more efficient.",
    },
    {
        name: "Michael Johnson",
        role:"Basketball Player",
        review: "I was skeptical at first, but RehabAI exceeded my expectations. The AI assistant's guidance and exercise tracking helped me regain strength and mobility in my injured knee.",
    },
];

function Testimonials() {
    return(
        <section className="bg-[#F8FCFD] py-28">
            <div className="mx-auto max-w-7xl px-8 lg:px-16">
                <div className="text-center">

  <span className="inline-flex items-center rounded-full bg-[#FFE8E5] px-4 py-2 text-sm font-medium text-[#F67D72]">
    Testimonials
  </span>

  <h2 className="mt-6 text-5xl font-bold text-[#173D47]">
    Trusted by Patients & Professionals
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
    Discover how RehabAI is helping patients recover faster and enabling physiotherapists to deliver smarter rehabilitation experiences.
  </p>

</div>
            <div className="mt-20 grid gap-8 md:grid-cols-3">

  {testimonials.map((testimonial) => (

    <div
      key={testimonial.name}
      className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >

      

      <div className="mb-6 flex gap-1">

        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      

      <p className="leading-8 text-gray-600">
        "{testimonial.review}"
      </p>

      

      <div className="mt-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE8E5] text-xl font-bold text-[#F67D72]">
          {testimonial.name.charAt(0)}
        </div>

        <div>

          <h4 className="text-lg font-semibold text-[#173D47]">
            {testimonial.name}
          </h4>

          <p className="text-gray-500">
            {testimonial.role}
          </p>

        </div>

      </div>

    </div>

  ))}

</div>
                </div>
                </section>
    );
}

export default Testimonials;