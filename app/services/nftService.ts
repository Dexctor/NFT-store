interface NFT {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    owner: string;
  }
  
  class NFTService {
    private nfts: NFT[] = [];
  
    createNFT(nft: Omit<NFT, 'id'>): NFT {
      const newNFT = { ...nft, id: Date.now().toString() };
      this.nfts.push(newNFT);
      this.saveNFTs();
      return newNFT;
    }
  
    getNFTsByOwner(owner: string): NFT[] {
      return this.nfts.filter(nft => nft.owner === owner);
    }
  
    deleteNFT(id: string): boolean {
      const initialLength = this.nfts.length;
      this.nfts = this.nfts.filter(nft => nft.id !== id);
      
      if (this.nfts.length < initialLength) {
        this.saveNFTs();
        return true;
      }
      
      return false;
    }
  
    private saveNFTs() {
      localStorage.setItem('nfts', JSON.stringify(this.nfts));
    }
  
    private loadNFTs() {
      const storedNFTs = localStorage.getItem('nfts');
      if (storedNFTs) {
        this.nfts = JSON.parse(storedNFTs);
      }
    }
  
    constructor() {
      this.loadNFTs();
    }
  }
  
  export const nftService = new NFTService();