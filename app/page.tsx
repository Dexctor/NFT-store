import HeroSection from '../app/components/HeroSection/HeroSection'
import TopArtists from './components/TopArtist/TopArtist';
import LiveAuctions from '../app/components/LiveAuctions/LiveAuctions'
import TodaysPick from './components/TodaysPick/TodaysPick';

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <TopArtists/>
    <LiveAuctions/>
    <TodaysPick/>
   </main>
  );
}
