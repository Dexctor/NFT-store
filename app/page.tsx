import HeroSection from '../app/components/HeroSection/HeroSection'
import TopArtists from './components/TopArtist/TopArtist';
import LiveAuctions from '../app/components/LiveAuctions/LiveAuctions'
import TodaysPick from './components/TodaysPick/TodaysPick';
import CoreFeatures from './components/CoreFeatures/CoreFeatures';

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <TopArtists/>
    <LiveAuctions/>
    <TodaysPick/>
    <CoreFeatures/>
   </main>
  );
}
