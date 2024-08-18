"use client";
import { useState } from "react";
import Link from "next/link";
import picksData from '../data/picksData.json'; // Remplacez par le chemin correct vers votre fichier data.json
import Image from "next/image";

const TodaysPick = () => {
  const { picks } = picksData;
  const [visiblePicks, setVisiblePicks] = useState(8);

  const loadMore = () => {
    setVisiblePicks(prevVisible => Math.min(prevVisible + 8, picks.length));
  };

  const showLess = () => {
    setVisiblePicks(8);
  };

  return (
    <div className="bg-[#0c0c24]">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white text-3xl font-bold">Live Picks</h2>
            <Link
              href="#"
              className="text-white bg-[#5D3EFF] px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
            >
              View All
            </Link>
          </div>
          <div className="border-b border-gray-800 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {picks.slice(0, visiblePicks).map((pick) => (
              <div
                key={pick.id}
                className="bg-[#262639] rounded-lg p-4 relative border border-[#4D4C5A] transition-transform transform hover:scale-1000 duration-100 ease-in-out"
              >
                <div className="relative w-full h-0 pb-[100%]">
                  <Image
                    src={pick.image}
                    alt={pick.title}
                    className="w-full rounded-lg object-cover"
                    fill
                    priority
                  />
                </div>
                <div className="absolute top-6 right-6 bg-white rounded-full px-2 py-1">
                  <span className="text-black text-sm">❤️ {pick.likes}</span>
                </div>
                <h3 className="text-white text-lg font-semibold mt-4">
                  {pick.title} #{pick.id}
                </h3>
                <div className="flex items-center mt-2">
                  <Image
                    src={pick.imageCreator}
                    alt={pick.creator}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-white text-sm">@{pick.creator}</p>
                    <p className="text-gray-400 text-xs">creator</p>
                  </div>
                  <div className="ml-auto text-white text-sm">
                    {pick.eth} ETH
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-[#5D3EFF] text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                    Place Bid
                  </button>
                  <Link
                    href="/path-for-view-history"
                    className="text-white gap-2 flex flex-row justify-center items-center hover:text-indigo-600 transition duration-200 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      width="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-white hover:text-indigo-600 transition duration-200 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    View History
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full pt-14 pb-11">
          {visiblePicks < picks.length ? (
            <button 
              onClick={loadMore}
              className="text-white border border-white px-10 py-4 rounded-lg hover:bg-indigo-600 hover:border-indigo-600 transition duration-300 ease-in-out"
            >
              Load More...
            </button>
          ) : (
            <button 
              onClick={showLess}
              className="text-white border border-white px-10 py-4 rounded-lg hover:bg-indigo-600 hover:border-indigo-600 transition duration-300 ease-in-out"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodaysPick;