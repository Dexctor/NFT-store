import Image from 'next/image';
import Breadcrumbs from '../../components/breadcums/breadcum';
import picksData from '../../components/data/picksData.json';

interface Pick {
  id: number;
  title: string;
  image: string;
  imageCreator: string;
  likes: string;
  creator: string;
  eth: string;
  time: string;
}

interface NFTPageProps {
  params: {
    id: string;
  };
}

export default async function NFTPage({ params }: NFTPageProps) {
  const { picks } = picksData as unknown as { picks: Pick[] };
  const nft = picks.find((pick) => pick.id === parseInt(params.id));

  if (!nft) {
    return <div>404 - NFT not found</div>;
  }

  return (
    <div className="bg-[#0c0c24] min-h-screen p-8">
      <Breadcrumbs />
      <div className="container mx-auto mt-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-[#2c2c39] p-6 rounded-lg overflow-hidden">
              <Image
                src={nft.image}
                alt={nft.title}
                width={500}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div>
              <h2 className="text-white text-3xl font-bold mb-4">{nft.title}</h2>
              <button className="flex items-center text-white bg-[#5D3EFF] py-2 px-4 rounded-md">
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
                <span className="ml-2">{nft.likes}</span>
              </button>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                <Image
                  src={nft.imageCreator}
                  alt="creator"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <h3 className="text-white text-lg">@{nft.creator}</h3>
                  <span className="text-gray-400 text-sm">Owned by</span>
                </div>
              </div>
            </div>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
              mi felis, pretium tincidunt lorem varius ac. Curabitur mauris lacus,
              pretium vel neque nec, blandit pharetra nulla.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-[#2c2c39] p-4 rounded-lg">
                <p className="text-white">
                  Artist : <span className="font-semibold">Devid Methio</span>
                </p>
                <p className="text-white">
                  Size : <span className="font-semibold">4000x4000</span>
                </p>
                <p className="text-white">
                  Created On : <span className="font-semibold">04 April , 2021</span>
                </p>
              </div>
              <div className="bg-[#2c2c39] p-4 rounded-lg text-center">
                <p className="text-white">
                  Current Bid : <span className="font-semibold">{nft.eth} ETH</span>
                </p>
                <p className="bg-[#5D3EFF] text-white py-2 mt-2 rounded-lg">
                  {nft.time}
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-[#5D3EFF] text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
