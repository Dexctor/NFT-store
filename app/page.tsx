import HeroSection from '@components/HeroSection/HeroSection';
import TopArtists from '@components/TopArtist/TopArtist';
import LiveAuctions from '@components/LiveAuctions/LiveAuctions';
import TodaysPick from '@components/TodaysPick/TodaysPick';
import CoreFeatures from '@components/CoreFeatures/CoreFeatures';
import PopularCollection from '@components/PopularCollection/PopularCollection';

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <TopArtists/>
    <LiveAuctions/>
    <TodaysPick/>
    <CoreFeatures/>
    <PopularCollection/>
   </main>
  );
}
