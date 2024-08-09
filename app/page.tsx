import HeroSection from '../app/components/HeroSection/HeroSection'
import TopArtists from './components/TopArtist/TopArtist';
import LiveAuctions from '../app/components/LiveAuctions/LiveAuctions'

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <TopArtists/>
    <LiveAuctions/>
   </main>
  );
}
