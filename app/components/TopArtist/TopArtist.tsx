/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TopArtists = () => {
  const artists = [
    {
      username: "@Devid_Miller",
      eth: "14.55 ETH",
      imgSrc: "/images/devid_miller.jpg",
    },
    {
      username: "@Elon_Mask",
      eth: "12.25 ETH",
      imgSrc: "/images/elon_mask.jpg",
    },
    {
      username: "@Hiliya_Farah",
      eth: "9.89 ETH",
      imgSrc: "/images/hiliya_farah.jpg",
    },
    {
      username: "@Wilium_Dev",
      eth: "2.09 ETH",
      imgSrc: "/images/wilium_dev.jpg",
    },
    {
      username: "@New_Artist1",
      eth: "1.50 ETH",
      imgSrc: "/images/new_artist1.jpg",
    },
    {
      username: "@New_Artist2",
      eth: "3.75 ETH",
      imgSrc: "/images/new_artist2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const artistListRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (currentIndex === artists.length) {
      // Transition rapide pour réinitialiser à la première slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Correspond à la durée de la transition
    } else if (currentIndex === -1) {
      // Transition rapide pour aller à la dernière slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(artists.length - 1);
      }, 500);
    }
  }, [currentIndex, artists.length]);

  useEffect(() => {
    if (artistListRef.current) {
      artistListRef.current.style.transition = isTransitioning ? 'transform 0.5s' : 'none';
      artistListRef.current.style.transform = `translateX(-${(currentIndex * 100) / artists.length}%)`;
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className="relative bg-[#1c1c28] p-8 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-2xl font-bold">Top Artists</h2>
        <div className="flex items-center space-x-2">
          <div className="border-r border-gray-600 h-6"></div>
          <button
            className="bg-gray-700 text-white rounded-full p-2 cursor-pointer"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-gray-700 text-white rounded-full p-2 cursor-pointer"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          ref={artistListRef}
          className="flex"
          style={{ width: `${artists.length * 100}%` }}
        >
          {artists.map((artist, index) => (
            <div key={index} className="w-2/2 p-2 flex-shrink-0">
              <div className="bg-[#2b2b3c] p-4 rounded-lg flex flex-col items-center border border-[#3c3c4d] hover:border-gradient-to-r from-[#ff80b5] to-[#9089fc]">
                <Image
                  src={artist.imgSrc}
                  alt={artist.username}
                  width={80}
                  height={80}
                  className="rounded-lg mb-4"
                />
                <p className="text-white text-lg">{artist.username}</p>
                <p className="text-[#00ff8b] text-lg">{artist.eth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
