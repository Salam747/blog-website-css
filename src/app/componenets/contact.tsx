"use client";
import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";
const heebo = Heebo({ subsets: ["latin"] });

const Contact = () => {
  return (
    <div id="contact" className="w-full md:w-[483px] h-auto bg-white flex items-center mx-auto my-16">
      <div className="m-auto p-4 w-[80%] md:w-[391px] h-auto flex flex-col items-start justify-evenly">
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className={`${heebo.className} font-bold text-[20px] md:text-[26px]`}>Contact Me</h2>
          <Link href="/" className={`${heebo.className} text-myPink text-[14px] md:text-[18px]`}>
            Home
          </Link>
        </div>
        <form
          target="_blank"
          action="https://formspree.io/f/movqeqwj"
          method="POST"
          className="w-full"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-myPink text-white font-bold py-2 px-4 rounded shadow-md shadow-black/45 focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
