

import Breadcrumbs from '@/app/components/breadcums/breadcum';
import { getNFTById } from '@/lib/nft';
import { NFTDetails } from '@/app/components/NFTDetails';
import { Metadata } from 'next';

interface NFTPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: NFTPageProps): Promise<Metadata> {
  const nft = await getNFTById(params.id);
  return {
    title: nft ? `${nft.title} | NFT Explorer` : 'NFT non trouvé',
    description: nft ? `Découvrez ${nft.title} par ${nft.creator}` : '',
  };
}

export default async function NFTPage({ params }: NFTPageProps) {
  const nft = await getNFTById(params.id);

  if (!nft) {
    return <div className="text-center text-white p-8">404 - NFT non trouvé</div>;
  }

  return (
    <div className="bg-[#0c0c24] min-h-screen p-4 sm:p-6 lg:p-8">
      <Breadcrumbs />
      <div className="container mx-auto mt-8 lg:mt-12">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <NFTDetails nft={nft} />
        </div>
      </div>
    </div>
  );
}