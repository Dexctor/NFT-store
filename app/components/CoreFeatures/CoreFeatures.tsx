/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

export default function CoreFeatures() {
  const features = [
    {
      title: "Set Up Your Wallet",
      text: "Lorem ipsum dolor sit amet consectetur smit.",
      icon: "/images/icon-f1.svg", 
      bgColor: "bg-[#2C2C39]",
      textColor: "text-white",
    },
    {
      title: "Make Your Collection",
      text: "Lorem ipsum dolor sit amet consectetur smit.",
      icon: "/images/icon-f2.svg", 
      bgColor: "bg-[#2C2C39]",
      textColor: "text-white",
    },
    {
      title: "Add Your NFTs",
      text: "Lorem ipsum dolor sit amet consectetur smit.",
      icon: "/images/icon-f3.svg",
      bgColor: "bg-[#2C2C39]",
      textColor: "text-white",
    },
    {
      title: "List Them For Sale",
      text: "Lorem ipsum dolor sit amet consectetur smit.",
      icon: "/images/icon-f4.svg", 
      bgColor: "bg-[#2C2C39]",
      textColor: "text-white",
    },
  ];

  return (
    <div className="bg-[#0c0c24] py-16">
      <div className="flex justify-center items-center">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-5xl font-bold text-white mt-6 mb-6">
            Core Features
          </h2>
          <p className="text-gray-500 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 flex flex-col items-center transition duration-300 border border-[#4D4C5A] ${feature.bgColor} hover:bg-white group`}
          >
            <div
              className={`rounded-full p-4 bg-white text-black flex items-center justify-center mb-4 transition duration-300 group-hover:text-black`}
            >
              <img src={feature.icon}/>
            </div>
            <h3 className={`text-2xl font-semibold mb-2 text-white group-hover:text-black`}>
              {feature.title}
            </h3>
            <p className={`text-center text-white group-hover:text-black`}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
