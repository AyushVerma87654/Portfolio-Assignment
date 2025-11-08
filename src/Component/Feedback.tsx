import { useState } from "react";
import { motion } from "framer-motion";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    name.trim() !== "" && isValidEmail(email) && message.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return; // prevent empty submission

    const body = `Name: ${name} Email: ${email} Message:${message}`;

    window.location.href = `mailto:ayushverma030299@gmail.com?subject=Portfolio Feedback&body=${encodeURIComponent(
      body
    )}`;
  };

  return (
    <section
      id="feedback"
      className="py-16 px-6 sm:px-12 bg-gradient-to-r from-purple-300 via-indigo-400 to-violet-600 
                 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Feedback & Enquiry
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white/10 dark:bg-gray-800/40 
                   p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-md"
      >
        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg text-gray-800 dark:text-gray-200 
                     bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 
                     focus:ring-yellow-400"
          required
        />

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded-lg text-gray-800 dark:text-gray-200 
                     bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 
                     focus:ring-yellow-400"
          required
        />

        {/* Message */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback or enquiry here..."
          className="w-full p-4 rounded-lg text-gray-800 dark:text-gray-200 
                     bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 
                     focus:ring-yellow-400 mb-4"
          rows={5}
          required
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 font-semibold rounded-lg transition-all duration-300
            ${
              isFormValid
                ? "bg-yellow-400 dark:bg-yellow-500 text-black hover:bg-yellow-300 dark:hover:bg-yellow-400 cursor-pointer"
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed opacity-60"
            }`}
        >
          Send Feedback
        </button>
      </motion.form>
    </section>
  );
}
