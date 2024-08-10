/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const TodaysPick = () => {
  const Picks = [
    {
      id: 551,
      title: "22-Bit Digital",
      image: "/images/image-001.svg",
      imageCreator: "/images/image-01.jpg",
      likes: "4.6K",
      creator: "Devid_Mill",
      eth: "5.49",
      time: "05 : 15 : 07 : 45",
    },
    {
      id: 729,
      title: "25-Bit Digital",
      image: "/images/image-002.svg",
      imageCreator: "/images/image-02.jpg",
      likes: "1.6K",
      creator: "Devid_Meth",
      eth: "1.58",
      time: "06 : 15 : 07 : 55",
    },
    {
      id: 395,
      title: "27-Bit Digital",
      image: "/images/image-003.svg",
      imageCreator: "/images/image-03.jpg",
      likes: "500",
      creator: "Jemmy_Fran",
      eth: "3.25",
      time: "02 : 15 : 08 : 44",
    },
    {
      id: 439,
      title: "35-Bit Digital",
      image: "/images/image-004.svg",
      imageCreator: "/images/image-04.jpg",
      likes: "200",
      creator: "Miliya_Cho",
      eth: "1.57",
      time: "07 : 15 : 03 : 12",
    },
    {
      id: 551,
      title: "22-Bit Digital",
      image: "/images/image-001.svg",
      imageCreator: "/images/image-01.jpg",
      likes: "4.6K",
      creator: "Devid_Mill",
      eth: "5.49",
      time: "05 : 15 : 07 : 45",
    },
    {
      id: 729,
      title: "25-Bit Digital",
      image: "/images/image-002.svg",
      imageCreator: "/images/image-02.jpg",
      likes: "1.6K",
      creator: "Devid_Meth",
      eth: "1.58",
      time: "06 : 15 : 07 : 55",
    },
    {
      id: 395,
      title: "27-Bit Digital",
      image: "/images/image-003.svg",
      imageCreator: "/images/image-03.jpg",
      likes: "500",
      creator: "Jemmy_Fran",
      eth: "3.25",
      time: "02 : 15 : 08 : 44",
    },
    {
      id: 439,
      title: "35-Bit Digital",
      image: "/images/image-004.svg",
      imageCreator: "/images/image-04.jpg",
      likes: "200",
      creator: "Miliya_Cho",
      eth: "1.57",
      time: "07 : 15 : 03 : 12",
    },
  ];

  return (
    <div className="bg-[#0c0c24]">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white text-3xl font-bold">Live Picks</h2>
            <Link
              href="#"
              className="text-white bg-[#5D3EFF] px-4 py-2 rounded-lg"
            >
              View All
            </Link>
          </div>
          <div className="border-b border-gray-600 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Picks.map((Pick) => (
              <div key={Pick.id} className="bg-[#262639] rounded-lg p-4">
                <div className="relative">
                  <img
                    src={Pick.image}
                    alt={Pick.title}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1">
                    <span className="text-black text-sm">❤️ {Pick.likes}</span>
                  </div>
                </div>
                <h3 className="text-white text-lg font-semibold mt-4">
                  {Pick.title} #{Pick.id}
                </h3>
                <div className="flex items-center m-0 p-0 overflow-hidden">
                  <img
                    src={Pick.imageCreator}
                    alt={Pick.creator}
                    className="w-8 h-8 rounded-sm overflow-hidden"
                  />
                  <div className="ml-3">
                    <p className="text-white text-sm">@{Pick.creator}</p>
                    <p className="text-gray-400 text-xs">creator</p>
                  </div>
                  <div className="ml-auto text-white text-sm">
                    {Pick.eth} ETH
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-[#5D3EFF] text-white px-4 py-2 rounded-lg">
                    Place Bid
                  </button>
                  <Link
                    href="/path-for-view-history"
                    className="text-white underline"
                  >
                    View History
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysPick;
