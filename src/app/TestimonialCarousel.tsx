// components/TestimonialsCarousel.tsx
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane D.",
    image: "https://avatar.iran.liara.run/public/54",
    quote:
      "rightGLUE saved my DIY project! I’ll never use another adhesive again.",
  },
  {
    name: "Mark S.",
    image: "https://avatar.iran.liara.run/public/21",
    quote:
      "The best glue I’ve ever used. Strong, reliable, and fast-drying.",
  },
  
];

export default function TestimonialsCarousel() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
        Testimonials
      </h2>
      <div className="overflow-hidden">
        <div className="flex animate-marquee space-x-4">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-[300px] bg-transparent p-6 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300 cursor-pointer"
            >
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} - Testimonial`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <blockquote className="italic text-gray-700 text-lg mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
