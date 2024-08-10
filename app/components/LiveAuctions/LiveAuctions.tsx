/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const LiveAuctions = () => {
  const auctions = [
    {
      id: 551,
      title: "22-Bit Digital",
      image: "/path/to/image1.png",
      likes: "4.6K",
      creator: "Devid_Mill",
      eth: "5.49",
      time: "05 : 15 : 07 : 45",
    },
    {
      id: 729,
      title: "25-Bit Digital",
      image: "/path/to/image2.png",
      likes: "1.6K",
      creator: "Devid_Meth",
      eth: "1.58",
      time: "06 : 15 : 07 : 55",
    },
    {
      id: 395,
      title: "27-Bit Digital",
      image: "/path/to/image3.png",
      likes: "500",
      creator: "Jemmy_Fran",
      eth: "3.25",
      time: "02 : 15 : 08 : 44",
    },
    {
      id: 439,
      title: "35-Bit Digital",
      image: "/path/to/image4.png",
      likes: "200",
      creator: "Miliya_Cho",
      eth: "1.57",
      time: "07 : 15 : 03 : 12",
    },
  ];

  return (
    <div className="mx-auto relative bg-[#0c0c24] px-6 py-4">
      <div className="w-full ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-bold">Live Auctions</h2>
          <Link href="#" className="text-white bg-[#5D3EFF] px-4 py-2 rounded-lg">
            View All
          </Link>
        </div>
        <div className="border-b border-gray-600 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {auctions.map((auction) => (
            <div key={auction.id} className="bg-[#262639] rounded-lg p-4">
              <div className="relative">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-20 rounded-full px-2 py-1">
                  <span className="text-white text-sm">❤️ {auction.likes}</span>
                </div>
              </div>
              <h3 className="text-white text-lg font-semibold mt-4">
                {auction.title} #{auction.id}
              </h3>
              <div className="flex items-center mt-2">
                <img
                  src="/path/to/creator-avatar.png"
                  alt={auction.creator}
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
  );
};

export default LiveAuctions;
