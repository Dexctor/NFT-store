"use client";
import Link from "next/link";
import Image from "next/image";
import auctions from '../data/auctionsData.json'; // Importer les données

const LiveAuctions = () => {
  return (
    <div className="bg-[#0c0c24]">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="w-full">
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
            {auctions.map((auction) => (
              <div
                key={auction.id}
                className="bg-[#262639] rounded-lg p-4 relative transition transform hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={auction.image}
                    alt={auction.title}
                    className="w-full rounded-lg object-cover"
                    width={500}
                    height={500}
                    priority={true}
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1">
                    <span className="text-black text-sm">❤️ {auction.likes}</span>
                  </div>
                </div>
                <h3 className="text-white text-lg font-semibold mt-4">
                  {auction.title} #{auction.id}
                </h3>
                <div className="flex items-center mt-2">
                  <Image
                    src={auction.imageCreator}
                    alt={auction.creator}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-white text-sm">@{auction.creator}</p>
                    <p className="text-gray-400 text-xs">creator</p>
                  </div>
                  <div className="ml-auto text-white text-sm">
                    {auction.eth} ETH
                  </div>
                </div>
                <div className="bg-[#1D1D33] text-center text-white rounded-lg mt-4 py-2 text-lg font-semibold">
                  {auction.time}
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
