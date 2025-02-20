"use client";

import React, {useState } from "react";
import Head from "next/head";
import Image from "next/image";
import TestimonialsCarousel from "@/app/TestimonialCarousel";
import ContactForm from "./ContactForm";
import 'animate.css';



export default function Home() {

  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactButtonClick = () => {
    setShowContactForm(!showContactForm);
  };


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
        className="bg-gradient-to-r from-blue-200 to-blue-500 text-white py-5 shadow-lg sticky top-0 z-50"
        role="banner"
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 animate__animated animate__rotateIn">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              right
              <span className="text-yellow-300 text-4xl sm:text-5xl ">
                GLUE
              </span>
            </h1>
          </div>

          {/* Tagline and CTA */}
          <div className="text-center md:text-left hidden sm:block">
            <p className="sm:text-2xl md:text-3xl font-semibold mb-2 ">
              Bonding Made Simple
            </p>
            <p className="sm:text-lg md:text-xl text-gray-200 mb-4">
              Strong. Reliable. Right for Every Job.
            </p>
            
            
          </div>
        </div>
      </header>

      <main className=" mx-auto p-6 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-12 max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex-1 cursor-pointer ">
            <div className="   max-w-lg mx-auto animate_animated animate__slideInLeft">
              <Image
                src="/jglue.png"
                alt="RightGLUE Banner showcasing strong adhesive"
                width={1200} // specify the width
                height={600} // specify the height
                layout="responsive"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <section className="flex-1 pl-8 ">
            <h2 className="text-xl md:text-3xl font-semibold mb-4 text-gray-800 animate__animated animate__rotateInUpRight">
              Why Choose&nbsp; 
              <span className="text-sm md:text-2xl font-bold">
                 right 
                </span> 
              <span className="text-yellow-400 font-bold">
              GLUE
              </span>&nbsp;?
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
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
              Perfect for Wood, Metal, Plastic and Leather.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">Eco-Friendly</h3>
            <p className="text-gray-600">
              Made with sustainable materials and non-toxic ingredients.
            </p>
          </div>
        </section>


          {/* How to Use Section */}
<section className="my-12 text-center">
  <h2 className="text-3xl font-semibold mb-6 text-gray-800">How to Use</h2>
  <ul className="space-y-4 text-gray-700">
    <li><strong>1) Prepare the Surface:</strong> Clean surfaces thoroughly, removing oil, dust, and moisture.</li>
    <li><strong>2) Pierce the Bottle:</strong> Use a pin to create a small opening in the glue bottle.</li>
    <li><strong>3) Apply the Adhesive:</strong> Place a small drop of glue on one surface.</li>
    <li><strong>4) Join the Surfaces:</strong> Align and press the surfaces together firmly.</li>
    <li><strong>5) Hold in place:</strong> Maintain pressure for a few seconds to allow the glue to set.</li>
  </ul>
</section>






       <TestimonialsCarousel/>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <details className="border-b py-4">
            <summary className="font-semibold text-gray-700 cursor-pointer">
              Is rightGLUE waterproof?
            </summary>
            <p className="text-gray-600">
              Yes! rightGLUE is designed to withstand water, making it ideal for
              indoor and outdoor use.
            </p>
          </details>
          <details className="border-b py-4">
            <summary className="font-semibold text-gray-700 cursor-pointer">
              How long does it take to dry?
            </summary>
            <p className="text-gray-600">
              It dries within 5 minutes and fully cures in 24 hours for maximum
              strength.
            </p>
          </details>
          <details className="border-b py-4">
            <summary className="font-semibold text-gray-700 cursor-pointer">
              Is it safe for children?
            </summary>
            <p className="text-gray-600">
              No, keep out from the reach of children.
            </p>
          </details>
        </section>


        <footer className="bg-gradient-to-r from-blue-300 to-blue-900 text-white py-6 rounded-xl">
  <div className="container mx-auto text-center">
    <h3 className="text-xl font-semibold mb-2">Our Address</h3>
    <p><strong>Deira Office:</strong> 04 265 5600</p>
    <p><strong>Mr. Biju:</strong> 055 902 7735 </p>
    <p><strong>Mr. Sameer:</strong> 052 909 6584</p>
    <p><strong>Website: </strong> 
      <a href="https://www.justrightinc.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">www.justrightinc.com</a>
    </p>
    <p><strong>Email: </strong> 
      <a href="mailto:info@justrightinc.com" className="text-white hover:underline">info@justrightinc.com</a> / 
      <a href="mailto:biju@justrightinc.com" className="text-white hover:underline"> biju@justrightinc.com</a>
    </p>
   
  </div>
</footer>





          {/* Email contact form*/}
          {/* Button to open contact form */}
        <section className="text-center my-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Have Questions? Get in Touch!
          </h2>
          <button
  onClick={handleContactButtonClick}
  className="relative inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-300 text-white rounded-full shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 animate__animated animate__pulse animate__infinite"
>
  <span className="absolute inset-0 bg-gradient-to-r from-purple-300 to-blue-500 opacity-20 group-hover:opacity-100 transition-all duration-300 rounded-full"></span>
  <span className="relative z-10 text-xl font-semibold">
    Reach out
  </span>
</button>

        </section>

        {/* Conditionally render the ContactForm based on state */}
        {showContactForm && (
          <div className="my-12">
            <ContactForm />
          </div>
        )}



        {/* <section className="text-center my-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Get Your rightGLUE Today!
          </h2>
          <button className="px-8 py-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </section> */}

<section className="my-12">
  <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
    More from&nbsp;
    <span className="text-lg md:text-2xl font-bold">
                 right 
                </span> 
              <span className="text-yellow-400 font-bold">
              GLUE
              </span>&nbsp;
  </h2>
  <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
    Check out our{" "}
    <a href="#" className="text-blue-600 hover:underline">
      Adhesive Tips & Tricks
    </a>{" "}
    for the best ways to use rightGLUE!
  </p>

  {/* Address Section */}
 

</section>


        
      </main>

      <footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto text-center">
    <p>&copy; 2025 rightGLUE. All rights reserved.</p>
    <p>This product conforms to HG/T2492-2018 Standard of Chemical Industry</p>
    <nav className="mt-4 flex justify-center items-center space-x-4">
      <a href="https://in.linkedin.com/company/justrightfzco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9.03h3.52v11.42zM5.32 7.56c-1.13 0-2.05-.91-2.05-2.04 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.04-2.05 2.04zM20.45 20.45h-3.52v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67h-3.52V9.03h3.38v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.58 0 4.24 2.35 4.24 5.41v6.28z"/></svg>
      </a>
      <a href="https://www.facebook.com/justrightme/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.596 0 0 .598 0 1.333v21.333C0 23.402.596 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.408c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.796.143v3.244l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.31h3.59l-.467 3.622h-3.123V24h6.116c.729 0 1.325-.598 1.325-1.334V1.333C24 .598 23.404 0 22.675 0z"/></svg>
      </a>
      <a href="https://www.instagram.com/justright_me.fzco/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.329 3.608 1.304.975.975 1.241 2.242 1.304 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.329 2.633-1.304 3.608-.975.975-2.242 1.241-3.608 1.304-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.329-3.608-1.304-.975-.975-1.241-2.242-1.304-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.329-2.633 1.304-3.608.975-.975 2.242-1.241 3.608-1.304 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.531.067-2.577.333-3.515 1.271-.938.938-1.204 1.984-1.271 3.515-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.067 1.531.333 2.577 1.271 3.515.938.938 1.984 1.204 3.515 1.271 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.531-.067 2.577-.333 3.515-1.271.938-.938 1.204-1.984 1.271-3.515.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.067-1.531-.333-2.577-1.271-3.515-.938-.938-1.984-1.204-3.515-1.271-1.28-.058-1.688-.072-4.947-.072z"/></svg>
      </a>
      
    </nav>
  </div>
</footer>


    </div>
  );
}
