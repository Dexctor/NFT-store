/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-20 w-20" />
              <div className="text-2xl font-semibold">NFT</div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About company</a></li>
              <li><a href="#" className="hover:text-white">Company services</a></li>
              <li><a href="#" className="hover:text-white">Job opportunities</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Customer</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Client support</a></li>
              <li><a href="#" className="hover:text-white">Latest news</a></li>
              <li><a href="#" className="hover:text-white">Company Details</a></li>
              <li><a href="#" className="hover:text-white">Who we are</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Subscribe Now</h4>
            <p className="mt-4 text-sm text-gray-400">
              Enter your email address for receiving valuable newsletters.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button className="px-4 bg-purple-600 rounded-r-md hover:bg-purple-700 focus:outline-none">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500 text-center">
          © Copyright 2025 - NFT, All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
