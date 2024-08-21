"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { nftService } from '../services/nftService';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { FaEdit, FaTrash } from 'react-icons/fa';
import type { RootState } from '../../store/store';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const calculateTotalValue = (nfts: any[]): number => {
  return nfts.reduce((total, nft) => total + parseFloat(nft.price), 0);
};

const findMostExpensiveNFT = (nfts: any[]): any | undefined => {
  return nfts.reduce((max, nft) => (!max || parseFloat(nft.price) > parseFloat(max.price) ? nft : max), undefined);
};

export default function Dashboard() {
  const [username, setUsername] = useState<string | null>(null);
  const [nfts, setNfts] = useState<any[]>([]);
  const router = useRouter();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

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

  const handleDeleteNFT = async (nftId: string) => {
    try {
      // Appel au service pour supprimer le NFT
      await nftService.deleteNFT(nftId);
      
      // Mise à jour de l'état local pour refléter la suppression
      setNfts(prevNfts => prevNfts.filter(nft => nft.id !== nftId));
      
      console.log(`NFT avec l'ID ${nftId} supprimé avec succès`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du NFT: ${error}`);
      // Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/signIn');
  };

  if (!isAuthenticated) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-40">
      <h1 className="text-3xl font-bold mb-6 text-white">Tableau de bord</h1>
      <p className="text-xl mb-4 text-gray-400">Bienvenue, {username} !</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Statistiques</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Nombre total de NFTs : {nfts.length}</p>
            <p>Valeur totale : {calculateTotalValue(nfts)} ETH</p>
            <p>NFT le plus cher : {findMostExpensiveNFT(nfts)?.title || 'N/A'}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mes NFTs</CardTitle>
            <CardDescription>Vous avez {nfts.length} NFTs dans votre collection.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="max-h-[300px]">
              {nfts.map((nft) => (
                <div key={nft.id} className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={nft.image} alt={nft.title} />
                    <AvatarFallback>{nft.title.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{nft.title}</p>
                    <p className="text-sm text-gray-500">{nft.price} ETH</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Link href={`/nft/edit/${nft.id}`}>
                      <FaEdit className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteNFT(nft.id)}>
                    <FaTrash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-2" onClick={() => router.push('/create-item')}>Créer un nouveau NFT</Button>
            <Button className="w-full" variant="outline" onClick={() => router.push('/explore')}>Explorer le marché</Button>
          </CardContent>
        </Card>
      </div>

      

      <Button variant="destructive" onClick={handleLogout}>
        Se déconnecter
      </Button>
    </div>
  );
}