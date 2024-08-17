"use client";
import Breadcrumbs from "../components/breadcums/breadcum";
import { useState } from "react";

export default function CreateItemPage() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <section className="py-8 px-4 bg-[#2c2c39]">
      <div className="container mx-auto">
        <Breadcrumbs />

        <div className="bg-[#1e1e26] p-8 rounded-lg mt-8">
          <form className="space-y-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-[#353444] p-6 rounded-lg">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center bg-[#4d4c5a] h-48 rounded-lg cursor-pointer"
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      className="text-gray-400"
                    >
                      <path
                        d="M28.3333 45L36.6667 55L48.3333 40L63.3333 60H16.6667L28.3333 45ZM70 63.3333V16.6667C70 12.9667 67 10 63.3333 10H16.6667C14.8986 10 13.2029 10.7024 11.9526 11.9526C10.7024 13.2029 10 14.8986 10 16.6667V63.3333C10 65.1014 10.7024 66.7971 11.9526 68.0474C13.2029 69.2976 14.8986 70 16.6667 70H63.3333C65.1014 70 66.7971 69.2976 68.0474 68.0474C69.2976 66.7971 70 65.1014 70 63.3333Z"
                        fill="#4D4C5A"
                      ></path>
                    </svg>
                    <span className="mt-2 text-lg text-white">
                      Drop files here
                    </span>
                    <span className="text-gray-400">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <span className="text-blue-500 mt-2">Or choose a file</span>
                    <span className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
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

              <div className="w-full md:w-1/2 px-4">
                <div>
                  <label htmlFor="title" className="block text-white mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter item title"
                    className="w-full bg-[#353444] text-white p-3 rounded-lg"
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
                    placeholder="10 ETH"
                    className="w-full bg-[#353444] text-white p-3 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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

                <div className="mt-4">
                  <p className="text-white font-semibold">
                    Time Auctions{" "}
                    <span className="text-gray-400">(optional)</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    className="bg-[#5D3EFF] text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition"
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
