"use client";
import Image from 'next/image';
import features from '../data/featuresData.json';

export default function CoreFeatures() {
  return (
    <section className="bg-[#0c0c24] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Core Features
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 sm:p-6 flex flex-col items-start transition duration-300 border border-[#4D4C5A] bg-[#2c2c39] ${feature.bgColor} hover:bg-white group`}
            >
              <div
                className={`rounded-full p-3 sm:p-4 bg-white text-black flex items-center justify-center mb-4 transition duration-300 group-hover:text-black`}
              >
                <Image src={feature.icon} alt={feature.title} width={24} height={24} />
              </div>
              <h3 className={`text-xl sm:text-2xl font-medium mb-2 text-white group-hover:text-black`}>
                {feature.title}
              </h3>
              <p className={`text-sm sm:text-base text-left text-gray-400 font-medium group-hover:text-gray-600`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}