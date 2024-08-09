/* eslint-disable @next/next/no-img-element */
"use client";
// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 flex items-center justify-between px-10 py-2 transition-colors duration-300 ${
        isScrolled ? "bg-black bg-opacity-70 backdrop-blur-sm text-white" : "bg-transparent text-gray-800"
      }`}
    >
      {/* Logo and NFT Text */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-24 w-24" />
        <span className="font-bold text-3xl">NFT</span>
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center space-x-8">
        <Link legacyBehavior href="/">
          <a
            className={`${
              isScrolled ? "text-white hover:text-gray-300" : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Home
          </a>
        </Link>
        <Link legacyBehavior href="/explore">
          <a
            className={`${
              isScrolled ? "text-white hover:text-gray-300" : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Explore
          </a>
        </Link>
        <Link legacyBehavior href="/community">
          <a
            className={`${
              isScrolled ? "text-white hover:text-gray-300" : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Community
          </a>
        </Link>
        <div className="relative group">
          <button
            className={`${
              isScrolled ? "text-white hover:text-gray-300" : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Page
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
            <Link legacyBehavior href="/subpage1">
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Subpage 1
              </a>
            </Link>
            <Link legacyBehavior href="/subpage2">
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Subpage 2
              </a>
            </Link>
          </div>
        </div>
        <Link legacyBehavior href="/support">
          <a className={`${
            isScrolled ? "text-white hover:text-gray-300" : "text-gray-500"
          }`}>
            Support
          </a>
        </Link>
      </div>

      {/* Search and Wallet Connect */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="focus:outline-none"
          >
            <svg
              className={`h-6 w-6 ${
                isScrolled ? "text-white" : "text-gray-800"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </button>
          {searchOpen && (
            <input
              type="text"
              className="absolute top-0 left-8 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              placeholder="Search..."
            />
          )}
        </div>
        <button className="flex items-center space-x-2  border border-white rounded-lg px-4 py-2 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
            />
          </svg>

          <span className={`${isScrolled ? "text-white" : "text-gray-800"}`}>Wallet Connect</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
