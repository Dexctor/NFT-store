"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { signOut } from '../../../store/authSlice';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut() as any);
  };

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

  const renderMobileMenu = () => (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-white focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1D2144] py-2">
          <Link href="/" className="block px-4 py-2 text-white hover:bg-indigo-600">
            Home
          </Link>
          <Link href="/explore" className="block px-4 py-2 text-[#BABABA] hover:bg-indigo-600">
            Explore
          </Link>
          <Link href="https://discord.com/invite/SxNNgXBAQS" className="block px-4 py-2 text-[#BABABA] hover:bg-indigo-600">
            Community
          </Link>
          <Link href="/support" className="block px-4 py-2 text-[#BABABA] hover:bg-indigo-600">
            Support
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`fixed w-full z-50 flex items-center justify-between px-4 lg:px-10 py-2 transition-colors duration-300 ${
        isScrolled ? "bg-[#1D2144] bg-opacity-70 backdrop-blur-sm text-white" : "bg-transparent text-gray-800"
      }`}
    >
      {/* Logo and NFT Text */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 lg:h-14 lg:w-14" />
        <span className="font-bold text-2xl lg:text-3xl text-white">NFT</span>
      </div>

      {/* Navigation Menu - Desktop */}
      <div className="hidden lg:flex items-center space-x-8">
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

      {/* Search and Wallet - Desktop */}
      <div className="hidden lg:flex items-center space-x-4">
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
        
        {isAuthenticated ? (
          <button onClick={handleSignOut} className="flex items-center space-x-2 bg-[#5142FC] hover:bg-[#4134d6] text-white font-bold py-2 px-4 rounded">
            <span>Se déconnecter</span>
          </button>
        ) : (
          <button className="flex items-center space-x-2 bg-[#5142FC] hover:bg-[#4134d6] text-white font-bold py-2 px-4 rounded">
            <span>Se connecter</span>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {renderMobileMenu()}
    </nav>
  );
};

export default Navbar;