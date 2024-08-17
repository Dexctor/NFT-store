"use client";

import Breadcrumbs from "../components/breadcums/breadcum";
import picksData from "../components/data/picksData.json";
import Image from "next/image";
import Link from "next/link";

interface Pick {
  id: number;
  image: string;
  title: string;
  likes: number;
  imageCreator: string;
  creator: string;
  eth: number;
}

export default function ExplorePage() {
  const { picks } = picksData as unknown as { picks: Pick[] };

  const categories: string[] = [
    "All",
    "Digital Art",
    "Music",
    "3D Illustration",
  ];
  const sortOptions: string[] = ["Top rate", "Mid rate", "Low rate"];

  const renderButtons = (items: string[]) =>
    items.map((item: string, index: number) => (
      <button
        key={index}
        className="px-4 py-2 bg-[#353444] text-white rounded-md hover:bg-indigo-700 transition duration-200 ease-in-out"
      >
        {item}
      </button>
    ));

  const renderSelect = (options: string[], defaultText: string) => (
    <div className="relative">
      <select className="px-4 py-2 bg-[#4d4c5a] border-2 border-[rgb(77,76,90)] text-white rounded-lg appearance-none">
        <option value="">{defaultText}</option>
        {options.map((option: string, index: number) => (
          <option key={index} value="">
            {option}
          </option>
        ))}
      </select>
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
            fill="white"
          ></path>
        </svg>
      </span>
    </div>
  );

  return (
    <main className="bg-[#0c0c24]">
      <Breadcrumbs />
      <div className="bg-[#0c0c24]">
        <div className="container mx-auto pb-16 pt-20">
          <div className="w-full">
            <div className="container mx-auto border-2 border-[rgb(77,76,90)] rounded-md">
              <div className="flex justify-between py-4 px-5 font-semibold">
                <div className="flex space-x-4">
                  {renderButtons(categories)}
                </div>
                <div className="flex space-x-4 bg-[#0c0c24] ">
                  {renderSelect(categories, "All Artworks")}
                  {renderSelect(sortOptions, "Sort By")}
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {picks.map((pick) => (
                <div
                  key={pick.id}
                  className="bg-[#2c2c39] border border-[#4d4c5a] rounded-lg p-4 relative"
                >
                  <div className="relative w-full h-0 pb-[70%]">
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
                  <Link href={`/explore/${pick.id}`} className="text-white text-lg font-semibold mt-4 hover:text-indigo-600">
                    {pick.title} #{pick.id}
                  </Link>
                  <div className="flex items-center mt-2 pb-8">
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
                    <div className="ml-auto text-gray-300 text-sm">
                      {pick.eth} ETH
                    </div>
                  </div>
                
                  <div className="flex justify-between items-center  border-t-2 border-[#4d4c5a] pt-8">
                    <button className="bg-[#5D3EFF] text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200">
                      Place Bid
                    </button>
                    <Link
                      href="/path-for-view-history"
                      className="text-white gap-2 flex flex-row justify-center items-center hover:text-indigo-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        width="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-white hover:text-indigo-500"
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

            <div className="flex justify-center w-full pt-14 pb-11">
              <button className="text-white border border-white px-10 py-4 rounded-lg hover:bg-indigo-600 hover:border-indigo-600 transition duration-300 ease-in-out">
                Load More...
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
