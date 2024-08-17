import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import picksData from '../components/data/picksData.json';

interface Pick {
  id: number;
  image: string;
  title: string;
  likes: number;
  imageCreator: string;
  creator: string;
  eth: number;
}

interface NFTPageProps {
  nft: Pick;
}

export default function NFTPage({ nft }: NFTPageProps) {
  return (
    <div className="bg-[#0c0c24] min-h-screen p-8">
      <div className="container mx-auto max-w-2xl bg-[#2c2c39] p-6 rounded-lg">
        <div className="relative w-full h-96">
          <Image
            src={nft.image}
            alt={nft.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-white text-3xl font-bold mt-6">{nft.title} #{nft.id}</h1>
        <div className="flex items-center mt-4">
          <Image
            src={nft.imageCreator}
            alt={nft.creator}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-white text-lg">@{nft.creator}</p>
            <p className="text-gray-400 text-sm">Creator</p>
          </div>
          <div className="ml-auto text-gray-300 text-lg">
            {nft.eth} ETH
          </div>
        </div>
        <div className="text-white mt-8">
          <p>Likes: ❤️ {nft.likes}</p>
          {/* Add any other details about the NFT here */}
        </div>
        <div className="mt-8">
          <button className="bg-[#5D3EFF] text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-200">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
    const { picks } = picksData as unknown as { picks: Pick[] };
    const paths = picks.map((pick) => ({
      params: { id: pick.id.toString() },
    }));
  
    console.log(paths); // Vérifie que le chemin pour '551' est bien présent
  
    return { paths, fallback: false };
  };
  

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { picks } = picksData as unknown as { picks: Pick[] };
  const nft = picks.find((pick) => pick.id === parseInt(params?.id as string));

  if (!nft) {
    return { notFound: true };
  }

  return {
    props: { nft },
  };
};
