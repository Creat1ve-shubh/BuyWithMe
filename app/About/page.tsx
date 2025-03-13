"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-6">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center text-center max-w-4xl"
        >
          <h1 className="text-7xl  font-serif font-thin">About Us</h1>

          <p className="text-2xl text-gray-300 mt-6 font-thin font-sans leading-relaxed">
            Welcome to BuyWithMe, where shopping alone is a thing of the past!
            🚀
            <br />
            Why pay full price when you can team up, buy in bulk, and save big?
            <br />
            Whether you are grabbing the latest gadgets, trendy outfits, or just
            a lifetime supply of snacks** (we will not judge), we make sure
            shopping together means spending less.
            <br />
            Think of us as your **virtual shopping squad**—always ready to help
            you unlock the best deals.
            <br />
            Because lets be honest, saving money is way more fun when you do it
            with friends (or friendly strangers).
            <br />
            Join us. Buy smart. Save together.
            <br />
            And laugh at overpriced solo shoppers. 😎
          </p>
          <div className="flex flex-row mt-6 gap-6 text-xl items-center justify-center">
            <Link href="https://github.com/Creat1ve-shubh" legacyBehavior>
              <a
                target="_blank"
                className="text-2xl text-gray-300 mt-6 font-thin font-serif hover:underline duration-500 transition-transform leading-relaxed"
              >
                Github
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/shubh-shrivastava/"
              legacyBehavior
            >
              <a
                target="_blank"
                className="text-2xl text-gray-300 mt-6 font-thin font-serif hover:underline duration-500 transition-transform leading-relaxed"
              >
                LinkedIn
              </a>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default About;
