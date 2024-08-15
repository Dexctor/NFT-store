import Image from "next/image";

const PopularCollection = () => {
  // Liste des collections définie dans le composant
  const collections = [
    {
      mainImage: "/images/image-c1.svg",
      smallImages: [
        "/images/image-c2.svg",
        "/images/image-c3.svg",
      ],
      title: "Creative 3d illustration",
      creator: {
        name: "Lathium_Lui",
        image: "/images/creator-image-1.jpg",
      },
      likes: "1.6K",
    },
    {
      mainImage: "/images/image-c4.svg",
      smallImages: [
        "/images/image-c5.svg",
        "/images/image-c6.svg",
      ],
      title: "Modern illustration",
      creator: {
        name: "Andrio_Hev",
        image: "/images/creator-image-2.jpg",
      },
      likes: "3.6K",
    },
    // Ajoutez d'autres collections si nécessaire
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-3xl font-bold">Popular Collection</h2>
        <button className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
          Explore More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((collection, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3">
                <Image src={collection.mainImage} alt={collection.title} className="rounded-lg" width={300} height={300} />
              </div>
              <div className="flex flex-col gap-2">
                {collection.smallImages.map((image, index) => (
                  <Image key={index} src={image} alt="" className="rounded-lg" width={100} height={100} />
                ))}
              </div>
            </div>
            <h3 className="text-white text-lg font-semibold mt-4">{collection.title}</h3>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <Image
                  src={collection.creator.image}
                  alt={collection.creator.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-2">
                  <p className="text-white text-sm">@{collection.creator.name}</p>
                  <p className="text-gray-400 text-xs">Creator</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                <span className="text-white text-sm ml-1">{collection.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCollection;
