/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { NFT } from "@/lib/nft";

interface NFTDetailsProps {
  nft: NFT;
}

export function NFTDetails({ nft }: NFTDetailsProps) {
  return (
    <>
      <div className="w-full lg:w-1/2 mb-12">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={nft.image}
            alt={nft.title}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="pl-8">
          <div className="mb-9 flex justify-between items-center">
            <h2 className="text-white text-3xl md:text-[38px] font-bold">
              {nft.title}
            </h2>
            <button className="inline-flex items-center bg-white rounded-lg py-1 px-3">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99999 11.8709L6.15416 11.1009C3.14999 8.37675 1.16666 6.57425 1.16666 4.37508C1.16666 2.57258 2.57832 1.16675 4.37499 1.16675C5.38999 1.16675 6.36416 1.63925 6.99999 2.38008C7.63582 1.63925 8.60999 1.16675 9.62499 1.16675C11.4217 1.16675 12.8333 2.57258 12.8333 4.37508C12.8333 6.57425 10.85 8.37675 7.84582 11.1009L6.99999 11.8709Z"
                  fill="#F85486"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-semibold text-gray-900">
                {nft.likes}
              </span>
            </button>
          </div>
          <div className="mb-9 flex flex-wrap">
            <div className=" flex items-center  ">
              <div className="mr-2.5  w-11">
                {nft.creatorImage ? (
                  <Image
                    src={nft.creatorImage}
                    alt="Propriétaire"
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                )}
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold">
                  @{nft.creator}
                  <span className="block text-xs font-medium text-gray-500">
                    Propriétaire
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex items-center pl-8">
              <div className="mr-2.5 h-11 w-11">
                {nft.creatorImage ? (
                  <Image
                    src={nft.creatorImage}
                    alt="Créateur"
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                )}
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold">
                  @{nft.creator}
                  <span className="block text-xs font-medium text-gray-500">
                    Créateur
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-300">{nft.description}</p>
          </div>
          <div className="bg-gray-800  rounded-md mb-6 border border-gray-700 flex flex-wrap items-center justify-between ">
            <div className="w-full md:w-1/2  ">

              <div className="space-y-2 p-6">
                <div className="flex flex-row items-center">
                  <p className="text-gray-400 text-base font-semibold pr-1">Artiste :</p>
                  <p className="text-white font-semibold">
                    {nft.artist || "Non spécifié"}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                <p className="text-gray-400 text-base font-semibold pr-1">Size :</p>
                <p className="text-white text-base font-semibold">4000x4000</p>
                </div>
                <div className="flex flex-row items-center">
                <p className="text-gray-400 text-base font-semibold pr-1">Created On :</p>
                <p className="text-white text-base font-semibold">04 April , 2021</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center flex flex-col items-center gap-6 p-6 border-l border-gray-700">
              <div className="space-y-2 flex items-baseline flex-row">
                <p className="text-gray-400 text-base pr-1 font-semibold ">Current Bid :</p>
                <p className="text-white font-semibold text-base">{nft.currentBid} ETH</p>

              </div>
              <div>
                <div>
                    <p className="text-gray-200 w-full font-semibold text-base py-3 px-8 rounded-md bg-gray-700">{nft.time}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 p-4 bg-gray-800 border border-[#4D4C5A] rounded-lg">
            <div className="flex border-b border-gray-700">
              <button className="py-2 px-4 text-gray-400  font-semibold ">
                Historique
              </button>
              <button className="py-2 px-4 text-gray-400">Enchères</button>
              <button className="py-2 px-4 text-gray-400">Détails</button>
            </div>
            <div className="mt-4 space-y-4">
              {/* Exemple d'historique */}
              <div className="flex justify-between items-center ">
                <div className="flex items-center ">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={nft.imageCreator}
                      alt="Bidder"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      @Bidder_Name
                    </h4>
                    <span className="text-gray-400 text-xs">
                      Il y a 5 heures
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold">4.75 ETH</h5>
                  <span className="text-gray-400 text-xs">= $12,246</span>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex items-center ">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={nft.imageCreator}
                      alt="Bidder"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      @Bidder_Name
                    </h4>
                    <span className="text-gray-400 text-xs">
                      Il y a 5 heures
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold">4.75 ETH</h5>
                  <span className="text-gray-400 text-xs">= $12,246</span>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex items-center ">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={nft.imageCreator}
                      alt="Bidder"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      @Bidder_Name
                    </h4>
                    <span className="text-gray-400 text-xs">
                      Il y a 5 heures
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold">4.75 ETH</h5>
                  <span className="text-gray-400 text-xs">= $12,246</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-[#5D3EFF] w-full text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600 transition">
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </>
  );
}