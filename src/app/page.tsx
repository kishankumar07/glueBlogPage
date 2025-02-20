"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import TestimonialsCarousel from "@/app/TestimonialCarousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>rightGLUE - The Ultimate Adhesive Solution</title>
        <meta
          name="description"
          content="Discover rightGLUE, the strongest and most reliable adhesive for all your bonding needs. Perfect for home, office, and industrial use."
        />
        <meta
          name="keywords"
          content="rightGLUE,best glue in dubai, adhesive, best glue, strong adhesive, industrial glue, home repair glue, waterproof adhesive, eco-friendly glue,best glue for wood,waterproof glue for industrial use,strongest adhesive for home repairs in Dubai "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="rightGLUE - The Ultimate Adhesive Solution"
        />
        <meta
          property="og:description"
          content="rightGLUE is your go-to adhesive for durability and strength. Get yours today!"
        />
        <meta property="og:image" content="/images/rightglue-banner.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Schema Markup for Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "rightGLUE",
              image: "https://yourwebsite.com/images/rightglue-banner.jpg",
              description:
                "rightGLUE is the strongest and most reliable adhesive for all your bonding needs. Perfect for home, office, and industrial use.",
              brand: {
                "@type": "Brand",
                name: "rightGLUE",
              },
              sku: "rightglue12345",
              offers: {
                "@type": "Offer",
                url: "https://yourwebsite.com",
                priceCurrency: "USD",
                price: "9.99",
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
              },
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  bestRating: "5",
                  ratingValue: "4.8",
                  worstRating: "1",
                },
                author: {
                  "@type": "Person",
                  name: "John Doe",
                },
              },
            }),
          }}
        />
      </Head>

      <header
        className="bg-gradient-to-r from-blue-200 to-blue-500 text-white py-8 shadow-lg sticky top-0 z-50"
        role="banner"
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-black">
              right
              <span className="text-yellow-300 text-4xl sm:text-5xl ">
                GLUE
              </span>
            </h1>
          </div>

          {/* Tagline and CTA */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              Bonding Made Simple
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              Strong. Reliable. Right for Every Job.
            </p>
          </div>
        </div>
      </header>

      <main className=" mx-auto p-6 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-12 max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex-1 cursor-pointer">
            <div className="p-6 sm:p-12 md:p-24 lg:p-36 max-w-lg mx-auto">
              <Image
                src="/jrglue.png"
                alt="RightGLUE Banner showcasing strong adhesive"
                width={1200} // specify the width
                height={600} // specify the height
                layout="responsive"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <section className="flex-1 pl-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Why Choose rightGLUE?
            </h2>
            <p className="text-lg text-gray-600">
              rightGLUE offers unbeatable bonding strength and versatility.
              Whether for home repairs, DIY projects, or industrial needs, our
              adhesive guarantees satisfaction.
            </p>
          </section>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 cursor-pointer">
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">
              Strong & Durable
            </h3>
            <p className="text-gray-600">
              Engineered to last, rightGLUE holds firm under any condition.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">Multi-Purpose</h3>
            <p className="text-gray-600">
              Perfect for wood, metal, plastic, ceramics, and more.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">Eco-Friendly</h3>
            <p className="text-gray-600">
              Made with sustainable materials and non-toxic ingredients.
            </p>
          </div>
        </section>

       <TestimonialsCarousel/>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <details className="border-b py-4">
            <summary className="font-semibold text-gray-700">
              Is rightGLUE waterproof?
            </summary>
            <p className="text-gray-600">
              Yes! rightGLUE is designed to withstand water, making it ideal for
              indoor and outdoor use.
            </p>
          </details>
          <details className="border-b py-4">
            <summary className="font-semibold text-gray-700">
              How long does it take to dry?
            </summary>
            <p className="text-gray-600">
              It dries within 5 minutes and fully cures in 24 hours for maximum
              strength.
            </p>
          </details>
          <details className="border-b py-4">
            <summary className="font-semibold text-gray-700">
              Is it safe for children?
            </summary>
            <p className="text-gray-600">
              Yes, rightGLUE is non-toxic and safe for use around children and
              pets.
            </p>
          </details>
        </section>

        <section className="text-center my-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Get Your rightGLUE Today!
          </h2>
          <button className="px-8 py-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
            More from rightGLUE
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Check out our{" "}
            <a href="/blog" className="text-blue-600 hover:underline">
              Adhesive Tips & Tricks
            </a>{" "}
            for the best ways to use rightGLUE!
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 rightGLUE. All rights reserved.</p>
          <nav className="mt-4">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white mx-2"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-400 hover:text-white mx-2"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
