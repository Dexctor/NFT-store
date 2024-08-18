import { ReactNode } from 'react';
import picksData from '@/app/components/data/picksData.json';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface NFT {
  ownerImage: string | StaticImport;
  owner: ReactNode;
  creatorImage: string | StaticImport;
  artist: ReactNode;
  size: ReactNode;
  createdOn: ReactNode;
  auctionEnds: ReactNode;
  currentBid: ReactNode;
  description: ReactNode;
  id: number;
  title: string;
  image: string;
  imageCreator: string;
  likes: string;
  creator: string;
  eth: string;
  time: string;
}

export async function getNFTById(id: string): Promise<NFT | undefined> {
  const { picks } = picksData as { picks: NFT[] };
  return picks.find((pick) => pick.id === parseInt(id));
}