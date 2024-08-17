"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import artists from '../data/topArtists.json'; // Importer les données

const TopArtists = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const nextSlide = () => embla && embla.scrollNext();
  const prevSlide = () => embla && embla.scrollPrev();

  return (
    <div className="bg-[#0c0c24]">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-3xl font-bold">Top Artists</h2>
          <div className="flex items-center space-x-4">
            <button
              className="bg-gray-700 text-white rounded-md p-2"
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
              className="bg-gray-700 text-white rounded-md p-2"
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

        {/* Divider */}
        <div className="border-b border-gray-600 mb-6"></div>

        {/* Carousel */}
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-4">
            {artists.map((artist, index) => (
              <div key={index} className="w-1/4 p-2 flex-shrink-0">
                <div className="flex bg-[#262639] p-5 rounded-md items-center border border-[#3c3c4d] transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ebc77a] via-[#ca3f8d] to-[#5142fc]">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden">
                    <Image
                      src={artist.imgSrc}
                      alt={artist.username}
                      fill
                      sizes="(max-width: 768px) 100vw, 
                             (max-width: 1200px) 50vw, 
                             33vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <div className="pl-4">
                    <h3 className="text-md font-semibold text-white mb-1">
                      {artist.username}
                    </h3>
                    <span className="text-[#36b37e] text-sm">{artist.eth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
