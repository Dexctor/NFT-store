/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PicksData from '../data/picksData.json'; // Importer les données

interface Pick {
  id: number;
  title: string;
  image: string;
  imageCreator: string;
  likes: string;
  creator: string;
  eth: string;
  time: string;
}

const LiveAuctions = () => {
  const picks: Pick[] = PicksData.picks.slice(0, 8); // Limiter à 8 éléments
  const [endTimes, setEndTimes] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    // Initialiser les temps de fin une seule fois
    const initialEndTimes: { [key: number]: number } = {};
    picks.forEach((pick) => {
      const randomHours = Math.floor(Math.random() * (48 - 24 + 1)) + 24;
      initialEndTimes[pick.id] = Date.now() + randomHours * 60 * 60 * 1000;
    });
    setEndTimes(initialEndTimes);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const newTimeLeft: { [key: number]: string } = {};

      picks.forEach((pick) => {
        const endTime = endTimes[pick.id];
        if (!endTime) return;

        const difference = endTime - now;

        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          newTimeLeft[pick.id] = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          newTimeLeft[pick.id] = "Terminé";
        }
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [endTimes, picks]);

  return (
    <div className="bg-[#0c0c24]">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="w-full ">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white text-3xl font-bold">Live Auctions</h2>
            <Link
              href="#"
              className="text-white bg-[#5D3EFF] px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
            >
              View All
            </Link>
          </div>
          <div className="border-b border-gray-600 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {picks.map((pick) => (
              <div
                key={pick.id}
                className="bg-[#262639] border border-[#4D4C5A] rounded-lg p-4 relative transition transform hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={pick.image}
                    alt={pick.title}
                    className="w-full rounded-lg object-cover"
                    width={500}
                    height={500}
                    priority={true}
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1">
                    <span className="text-black text-sm">❤️ {pick.likes}</span>
                  </div>
                </div>
                <Link href={`/explore/${pick.id}`} className="text-white text-lg font-semibold mt-4">
                  {pick.title} #{pick.id}
                </Link>
                <div className="flex items-center mt-2">
                  <Image
                    src={pick.imageCreator}
                    alt={pick.creator}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-white text-sm">@{pick.creator}</p>
                    <p className="text-gray-400 text-xs">creator</p>
                  </div>
                  <div className="ml-auto text-white text-sm">
                    {pick.eth} ETH
                  </div>
                </div>
                <div className="bg-[#1D1D33] text-center tracking-widest text-white rounded-lg mt-4 py-2 text-lg font-semibold">
                  {timeLeft[pick.id] || pick.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuctions;