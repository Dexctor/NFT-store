/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { nftService } from '../services/nftService';
import Breadcums from '../components/breadcums/breadcum'
import Link from 'next/link';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store'; // Added this line to import RootState

export default function Dashboard() {
  const [username, setUsername] = useState<string | null>(null);
  const [nfts, setNfts] = useState<any[]>([]);
  const router = useRouter();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // Using RootState here

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signIn');
    } else {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
        const userNFTs = nftService.getNFTsByOwner(storedUsername);
        setNfts(userNFTs);
      }
    }
  }, [router, isAuthenticated]);

  const handleDeleteNFT = (nftId: string) => {
    // Logique pour supprimer le NFT
    console.log(`Suppression du NFT avec l'ID: ${nftId}`);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/signIn');
  };

  if (!isAuthenticated) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
        <Breadcums/>
      <h1 className="text-3xl font-bold mb-6 text-white pt-12">Tableau de bord</h1>
      <p className="text-xl mb-4 text-gray-400 pb-12">Bienvenue, {username} !</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mes NFTs</h2>
          <p className="mb-4">Vous avez {nfts.length} NFTs dans votre collection.</p>
          <div className="grid grid-cols-2 gap-4">
            {nfts.map((nft) => (
              <div key={nft.id} className="bg-gray-100 p-3 rounded-lg flex flex-col">
                <Link href={`/nft/${nft.id}`} className="group">
                  <img src={nft.image} alt={nft.title} className="w-full h-24 object-cover rounded-md mb-2 group-hover:opacity-80 transition-opacity" />
                  <h3 className="font-semibold text-sm truncate">{nft.title}</h3>
                  <p className="text-xs text-gray-600">{nft.price} ETH</p>
                </Link>
                <div className="mt-2 flex justify-end space-x-2">
                  <Link href={`/nft/edit/${nft.id}`} className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </Link>
                  <button onClick={() => handleDeleteNFT(nft.id)} className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:bg-[#2C2C39] hover:text-white hover:border-gray-600 transition duration-200 ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Solde du portefeuille</h2>
          <p className='hover:text-gray-400'>Votre solde actuel est de X ETH.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:bg-[#2C2C39] hover:text-white hover:border-gray-600 transition duration-200 ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Activité récente</h2>
          <p className='hover:text-gray-400'>Aucune activité récente à afficher.</p>
        </div>
      </div>
      <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Se déconnecter</button>
    </div>
  );
}