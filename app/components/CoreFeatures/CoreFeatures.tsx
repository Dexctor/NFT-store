/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import features from '../data/featuresData.json'; // Importer les données

export default function CoreFeatures() {
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
            className={`rounded-lg p-6 flex flex-col items-start transition duration-300 border border-[#4D4C5A] bg-[#2c2c39] ${feature.bgColor} hover:bg-white group`}
          >
            <div
              className={`rounded-full p-4 bg-white text-black flex items-start justify-center mb-4 transition duration-300 group-hover:text-black`}
            >
              <img src={feature.icon}/>
            </div>
            <h3 className={`text-2xl font-semibold mb-2 text-white group-hover:text-black`}>
              {feature.title}
            </h3>
            <p className={`text-left text-gray-400 font-medium group-hover:text-gray-400`}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
