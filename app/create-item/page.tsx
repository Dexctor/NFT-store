"use client";
import Breadcrumbs from "../components/breadcums/breadcum";
import { useState } from "react";
import { nftService } from "../services/nftService";
import { useRouter } from 'next/navigation';

export default function CreateItemPage() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFiles && selectedFiles.length > 0) {
      const file = selectedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const username = localStorage.getItem('username') || 'unknown';
        const newNFT = nftService.createNFT({
          title,
          description,
          price,
          image: reader.result as string,
          owner: username
        });
        console.log('NFT créé:', newNFT);
        router.push('/dashboard');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-4 sm:py-8 px-2 sm:px-4 bg-[#0c0c24]">
      <div className="container mx-auto">
        <Breadcrumbs />

        <div className="bg-[#1d1d29] p-4 mb-16 sm:p-8 rounded-lg mt-4 sm:mt-8">
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row flex-wrap -mx-2 sm:-mx-4">
              <div className="w-full sm:w-full md:w-1/2 px-2 sm:px-4 mb-4 sm:mb-0">
                <div className="bg-[#353444] p-4 sm:p-6 rounded-lg h-auto sm:h-600 border-dashed border border-gray-300">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center bg-[#4d4c5a] h-550 rounded-lg cursor-pointer h"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-20 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>

                    <span className="mt-2 text-lg text-white">
                      Drop files here
                    </span>
                    <span className="text-gray-400">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <span className="text-blue-500 mt-2">Or choose a file</span>
                    <span className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg">
                      Browse
                    </span>
                  </label>
                  {selectedFiles && (
                    <div className="mt-4">
                      {Array.from(selectedFiles).map((file, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center bg-[#353444] p-2 rounded-lg mb-2"
                        >
                          <span className="text-white">{file.name}</span>
                          <button className="text-red-500">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                fill="currentColor"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full sm:w-full md:w-1/2 px-2 sm:px-4">
                <div>
                  <label htmlFor="title" className="block text-white mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter item title"
                    className="w-full bg-[#353444] text-white p-3 rounded-lg"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="description"
                    className="block text-white mb-2"
                  >
                    Description (optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Type item description"
                    className="w-full bg-[#353444] text-white p-3 rounded-lg"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label htmlFor="price" className="block text-white mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="10 ETH"
                    className="w-full bg-[#353444] text-white p-3 rounded-lg"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="royalties"
                      className="block text-white mb-2"
                    >
                      Royalties
                    </label>
                    <input
                      type="text"
                      id="royalties"
                      name="royalties"
                      placeholder="5%"
                      className="w-full bg-[#353444] text-white p-3 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-white mb-2">
                      Size
                    </label>
                    <input
                      type="text"
                      id="size"
                      name="size"
                      placeholder="e.g. 'size'"
                      className="w-full bg-[#353444] text-white p-3 rounded-lg"
                    />
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <p className="text-white font-semibold">
                    Time Auctions{" "}
                    <span className="text-gray-400">(optional)</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-white mb-2"
                    >
                      Starting date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="w-full bg-[#353444] text-white p-3 rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="expireDate"
                      className="block text-white mb-2"
                    >
                      Expiration date
                    </label>
                    <input
                      type="time"
                      id="expireDate"
                      name="expireDate"
                      className="w-full bg-[#353444] text-white p-3 rounded-lg"
                    />
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#5D3EFF] text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition"
                  >
                    Create Item
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}