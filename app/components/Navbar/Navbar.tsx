"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const renderConnectionButton = () => {
    return (
      <Link href="/connecte-wallet" className="flex items-center space-x-2 border border-white rounded-lg px-4 py-2 hover:bg-indigo-600 hover:border-indigo-600 transition duration-200 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
          />
        </svg>
        <span className="text-white">Connecter Wallet</span>
      </Link>
    )
  }

  return (
    <nav
      className={`fixed w-full z-50 flex items-center justify-between px-10 py-2 transition-colors duration-300 ${
        isScrolled ? "bg-[#1D2144] bg-opacity-70 backdrop-blur-sm text-white" : "bg-transparent text-gray-800"
      }`}
    >
      {/* Logo and NFT Text */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-14 w-14" />
        <span className="font-bold text-3xl text-white">NFT</span>
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center space-x-8">
        <Link href="/" className={`text-white hover:text-gray-300`}>
          Home
        </Link>
        <Link href="/explore" className="text-[#BABABA] hover:text-gray-300">
          Explore
        </Link>
        <Link href="https://discord.com" className="text-[#BABABA] hover:text-gray-300">
          Community
        </Link>

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            ref={buttonRef}
            aria-expanded={dropdownOpen}
            type="button"
            className="flex items-center gap-2 bg-transparent text-[#BABABA] px-5 py-2.5 rounded-md"
            onMouseEnter={() => setDropdownOpen(true)}
          >
            Page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div
              ref={panelRef}
              className="p-4 absolute left-0 mt-2 w-52 rounded-md bg-[#1d2144] shadow-md"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/explore" className="block px-4 py-2.5 text-[#BABABA] text-sm hover:text-white">
                Explore items
              </Link>
              <Link href="/explore/1" className="block px-4 py-2.5 text-[#BABABA] text-sm hover:text-white">
                Item Details
              </Link>
              <Link href="/create-item" className="block px-4 py-2.5 text-[#BABABA] text-sm hover:text-white">
                Create item
              </Link>
              <Link href="/connect-wallet" className="block px-4 py-2.5 text-[#BABABA] text-sm hover:text-white">
                Connect Wallet
              </Link>
              <Link href="/support" className="block px-4 py-2.5 text-[#BABABA] text-sm hover:text-white">
                Support
              </Link>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
              <Link href="/signUp" className="block px-4 py-2.5 text-[#BABABA] text-sm hover:text-white">
                Sign Up Page
              </Link>
              <Link href="/signIn" className="block px-4 py-2.5 text-[#BABABA] text-sm hover:text-white">
                Sign In Page
              </Link>
            </div>
          )}
        </div>

        <Link href="/support" className="text-[#BABABA] hover:text-gray-300">
          Support
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
              className="h-6 w-6 text-white"
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
        {renderConnectionButton()}
      </div>
    </nav>
  );
};

export default Navbar;