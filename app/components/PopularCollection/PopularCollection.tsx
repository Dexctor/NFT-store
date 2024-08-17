"use client";
import Image from "next/image";
import collections from '../data/popularCollection.json'; // Importer les données

const PopularCollection = () => {
  return (
    <div className="bg-[#0c0c24]">
      <div className="container mx-auto max-w-7xl py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-bold">Popular Collection</h2>
          <button className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
            Explore More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
              <div className="flex">
                {index === 1 ? (
                  <div className="flex w-full">
                    <div className="flex-shrink-0 mr-4" style={{ flex: '0 0 30%' }}>
                      <Image
                        src={collection.mainImage}
                        alt={collection.title}
                        className="rounded-lg object-cover"
                        width={350} 
                        height={250}
                        layout="responsive"
                      />
                    </div>
                    <div className="flex flex-col justify-between" style={{ flex: '1' }}>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {collection.smallImages.slice(0, 2).map((image, idx) => (
                          <Image
                            key={idx}
                            src={image}
                            alt={collection.title}
                            className="rounded-lg object-cover"
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        ))}
                      </div>
                      <div>
                        <Image
                          src={collection.smallImages[2]}
                          alt={collection.title}
                          className="rounded-lg object-cover"
                          width={200}
                          height={100}
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex">
                    <div className={`flex-shrink-0 mr-4 ${index === 0 ? 'w-96 h-60' : ''}`}>
                      <Image
                        src={collection.mainImage}
                        alt={collection.title}
                        className="rounded-lg object-cover"
                        width={index === 0 ? 250 : 200} 
                        height={index === 0 ? 250 : 200}
                        layout="responsive"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      {collection.smallImages.map((image, idx) => (
                        <div key={idx} className={`mb-${idx < collection.smallImages.length - 1 ? '4' : '0'}`}>
                          <Image
                            src={image}
                            alt=""
                            className="rounded-lg object-cover"
                            width={80}
                            height={80}
                            layout="responsive"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-end mt-6 flex-grow">
                <div className="flex justify-between items-center">
                  <h3>
                    <button onClick={() => {}} className="text-white text-xl font-semibold">
                      {collection.title}
                    </button>
                  </h3>
                  <button className="flex items-center text-black bg-white py-1 px-2 rounded-lg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M6.99999 11.8709L6.15416 11.1009C3.14999 8.37675 1.16666 6.57425 1.16666 4.37508C1.16666 2.57258 2.57832 1.16675 4.37499 1.16675C5.38999 1.16675 6.36416 1.63925 6.99999 2.38008C7.63582 1.63925 8.60999 1.16675 9.62499 1.16675C11.4217 1.16675 12.8333 2.57258 12.8333 4.37508C12.8333 6.57425 10.85 8.37675 7.84582 11.1009L6.99999 11.8709Z"
                        fill="#F85486"
                      ></path>
                    </svg>
                    <span className="font-semibold text-sm">{collection.likes}</span>
                  </button>
                </div>
                <div className="mt-4 flex items-center">
                  <div className="mr-4">
                    <Image
                      src={collection.creator.image}
                      alt={collection.title}
                      className="rounded-full object-cover"
                      width={40}
                      height={40}
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <h4 className="text-white">
                      @{collection.creator.name}
                      <span className="text-gray-400 ml-2">Creator</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCollection;
