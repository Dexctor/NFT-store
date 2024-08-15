"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const TopArtists = () => {
  const artists = [
    {
      username: "@Devid_Miller",
      eth: "14.55 ETH",
      imgSrc: "/images/image-01.jpg",
    },
    {
      username: "@Elon_Mask",
      eth: "12.25 ETH",
      imgSrc: "/images/image-02.jpg",
    },
    {
      username: "@Hiliya_Farah",
      eth: "9.89 ETH",
      imgSrc: "/images/image-03.jpg",
    },
    {
      username: "@Wilium_Dev",
      eth: "2.09 ETH",
      imgSrc: "/images/image-04.jpg",
    },
    {
      username: "@New_Artist1",
      eth: "1.50 ETH",
      imgSrc: "/images/image-01.jpg",
    },
    {
      username: "@New_Artist2",
      eth: "3.75 ETH",
      imgSrc: "/images/image-02.jpg",
    },
  ];

  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 3, // Définit le nombre de slides défilant à la fois
  });


  const nextSlide = () => {
    if (embla) embla.scrollNext();
  };

  const prevSlide = () => {
    if (embla) embla.scrollPrev();
  };

  return (
    <div className="bg-[#0c0c24]">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-3xl font-bold">Top Artists</h2>
          <div className="flex items-center space-x-4">
            <button
              className="bg-gray-700 text-white rounded-md p-2 cursor-pointer"
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
              className="bg-gray-700 text-white rounded-md p-2 cursor-pointer"
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
        <div className="w-full overflow-hidden flex" ref={emblaRef}>
          <div className="flex "> {/* Augmentez l'espacement ici */}
            {artists.map((artist, index) => (
              <div key={index} className="w-[25%] p-2 flex-shrink-0"> {/* Ajustez la largeur */}
                <div className="flex-row bg-[#262639] p-5 rounded-md flex items-center border border-[#3c3c4d] transition duration-300 ease-in-out hover:bg-gradient-to-r  from-[#ebc77a] via-[#ca3f8d] to-[#5142fc] ">
                  <div className="relative h-12 w-12 rounded-md m-0 p-0 overflow-hidden ">
                    <Image
                      src={artist.imgSrc}
                      alt={artist.username}
                      fill
                      sizes="(max-width: 768px) 100vw, 
                     (max-width: 1200px) 50vw, 
                     33vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="mr-3"
                    />
                  </div>
                  <div className="p-2">
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
