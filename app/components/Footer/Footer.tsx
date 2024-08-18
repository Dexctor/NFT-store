/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start mb-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img src="/logo.png" alt="Logo" className="h-16 w-16" />
              <div className="text-2xl font-semibold">NFT</div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod
              tempor incididunt ut labore et dolore.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Company services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Job opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Client support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Latest news
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Company Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Who we are
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Subscribe Now</h4>
            <p className="text-sm text-gray-400 mb-4">
              Enter your email address for receiving valuable newsletters.
            </p>
            <form className="flex relative rounded-lg">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 text-sm text-gray-400 border-y border-l border-gray-500 rounded-l-md bg-transparent focus:outline-none"
              />
              
              <button className="px-3  bg-purple-600 rounded-r-md hover:bg-purple-700 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-sm text-gray-500 text-center">
            © Copyright 2025 - NFT, All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
