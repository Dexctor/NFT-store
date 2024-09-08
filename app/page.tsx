"use client"
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/authSlice';
import HeroSection from '../app/components/HeroSection/HeroSection';
import TopArtists from '../app/components/TopArtist/TopArtist';
import LiveAuctions from '../app/components/LiveAuctions/LiveAuctions';
import TodaysPick from '../app/components/TodaysPick/TodaysPick';
import CoreFeatures from '../app/components/CoreFeatures/CoreFeatures';
import PopularCollection from '../app/components/PopularCollection/PopularCollection';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user) {
      dispatch(setUser(session.user));
    }
  }, [session, dispatch]);

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