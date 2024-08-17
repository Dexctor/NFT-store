/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-dark mx-auto">
      <div className="relative isolate lg:px-8">
        {/* Fond de la section avec dégradé et lignes verticales */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#10102a] to-[#0c0c24] ">
          {/* Lignes verticales avec CSS Grid */}
          <div className="absolute inset-0 grid grid-cols-12">
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
            <div className="h-full w-px bg-gradient-to-b from-white to-transparent opacity-20"></div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Section du texte */}
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight leading-10 text-white sm:text-5xl">
                Tailwind Template for NFT Marketplace and Web3 Platforms
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Template for NFT, Token, and Web3 marketplace projects, based on
                Tailwind CSS. Comes with all the essential UI components and
                pages you need to build an NFT marketplace or all sorts of Web3
                platforms.
              </p>

              <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-7 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore now
                </a>
                <a
                  href="#"
                  className="flex items-center border border-white rounded-md px-7 py-4 text-white hover:bg-indigo-600 hover:border-indigo-600 transition duration-200 ease-in-out"
                >
                  Upload Your Art
                </a>
              </div>
            </div>

            {/* Section de l'image */}
            <div className="flex justify-center">
              <Image
                src="/hero-image.svg"
                alt="Description de l'image"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
