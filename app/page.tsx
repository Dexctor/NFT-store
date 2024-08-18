"use client"
import { motion } from 'framer-motion';
import HeroSection from '@components/HeroSection/HeroSection';
import TopArtists from '@components/TopArtist/TopArtist';
import LiveAuctions from '@components/LiveAuctions/LiveAuctions';
import TodaysPick from '@components/TodaysPick/TodaysPick';
import CoreFeatures from '@components/CoreFeatures/CoreFeatures';
import PopularCollection from '@components/PopularCollection/PopularCollection';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <TopArtists/>
    </motion.div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <LiveAuctions/>
    </motion.div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <TodaysPick/>
    </motion.div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <CoreFeatures/>
    </motion.div>
  
      <PopularCollection/>
   
   </main>
  );
}