"use client";
import Image from "next/image";
import collections from '../data/popularCollection.json';

const PopularCollection = () => {
  return (
    <div className="bg-[#0c0c24]">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Popular Collection</h2>
          <button className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
            Explore More
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <CollectionCard key={index} collection={collection} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CollectionCard = ({ collection, index }: { collection: any; index: number }) => {
  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-col justify-between border border-[#4D4C5A]">
      <div className="flex flex-col sm:flex-row">
        <CollectionImages collection={collection} index={index} />
      </div>
      <CollectionInfo collection={collection} />
    </div>
  );
};

const CollectionImages = ({ collection, index }: { collection: any; index: number }) => {
  if (index === 1) {
    return (
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-1/3">
          <Image
            src={collection.mainImage}
            alt={collection.title}
            className="rounded-lg object-cover w-full h-auto"
            width={350} 
            height={250}
            style={{ aspectRatio: '350/250' }}
          />
        </div>
        <div className="flex flex-col justify-between w-full sm:w-2/3">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {collection.smallImages.slice(0, 2).map((image: string, idx: number) => (
              <Image
                key={idx}
                src={image}
                alt={`${collection.title} small image ${idx + 1}`}
                className="rounded-lg object-cover w-full h-auto"
                width={100}
                height={100}
                style={{ aspectRatio: '1/1' }}
              />
            ))}
          </div>
          <div>
            <Image
              src={collection.smallImages[2]}
              alt={`${collection.title} small image 3`}
              className="rounded-lg object-cover w-full h-auto"
              width={200}
              height={100}
              style={{ aspectRatio: '2/1' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <div className={`flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 ${index === 0 ? 'w-full sm:w-96 h-60' : ''}`}>
        <Image
          src={collection.mainImage}
          alt={collection.title}
          className="rounded-lg object-cover w-full h-full"
          width={index === 0 ? 250 : 200} 
          height={index === 0 ? 250 : 200}
          style={{ aspectRatio: index === 0 ? '1/1' : '200/200' }}
        />
      </div>
      <div className="flex flex-row sm:flex-col justify-between">
        {collection.smallImages.map((image: string, idx: number) => (
          <div key={idx} className={`${idx < collection.smallImages.length - 1 ? 'mr-2 sm:mr-0 sm:mb-4' : ''}`}>
            <Image
              src={image}
              alt={`${collection.title} small image ${idx + 1}`}
              className="rounded-lg object-cover w-full h-auto"
              width={80}
              height={80}
              style={{ aspectRatio: '1/1' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CollectionInfo = ({ collection }: { collection: any }) => {
  return (
    <div className="flex flex-col justify-end mt-6 flex-grow">
      <div className="flex justify-between items-center py-5">
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
            alt={collection.creator.name}
            className="rounded-full object-cover"
            width={40}
            height={40}
            style={{ width: '40px', height: '40px' }}
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
  );
};

export default PopularCollection;