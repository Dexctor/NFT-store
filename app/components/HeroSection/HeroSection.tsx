"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const verticalLines = Array(12).fill(null);

  return (
    <div className="bg-dark">
      <div className="relative isolate px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#10102a] to-[#0c0c24]">
          <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
            {verticalLines.map((_, index) => (
              <div
                key={index}
                className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"
              />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white"
              >
                Tailwind Template for NFT Marketplace and Web3 Platforms
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-gray-400"
              >
                Template for NFT, Token, and Web3 marketplace projects, based on
                Tailwind CSS. Comes with all the essential UI components and
                pages you need to build an NFT marketplace or all sorts of Web3
                platforms.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
              >
                <a
                  href="#"
                  className="w-full sm:w-auto rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore now
                </a>
                <a
                  href="#"
                  className="w-full sm:w-auto flex items-center justify-center border border-white rounded-md px-5 py-3 text-sm font-semibold text-white text-center hover:bg-indigo-600 hover:border-indigo-600 transition duration-200 ease-in-out"
                >
                  Upload Your Art
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center mt-8 lg:mt-0"
            >
              <Image
                src="/hero-image.svg"
                alt="Description de l'image"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}