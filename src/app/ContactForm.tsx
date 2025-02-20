"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show the SweetAlert loading animation
    Swal.fire({
      title: "Sending message...",
      html: "Please do not press back button",
      timer: 3000, // Timer set to 2 seconds (2000ms)
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        // This will be executed when the alert closes
      },
    }).then(() => {
      // After the 2-second delay, proceed with sending the email
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          e.target as HTMLFormElement, // form element
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(
          () => {
            setStatus(
              "Message sent successfully, We will be in touch with you soon !"
            );
            setFormData({ from_name: "", reply_to: "", message: "" });
            setTimeout(() => {
              setStatus("");
            }, 5000);
          },
          (error) => {
            console.error("Error at email sending:",error);
            setStatus("Message failed to send. Please try again.");
          }
        );
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-500 p-8 rounded-lg shadow-lg max-w-xl mx-auto my-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reply_to" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      {status && (
        <p className="mt-4 text-center text-slate-900 text-lg">{status}</p>
      )}
    </div>
  );
};

export default ContactForm;
