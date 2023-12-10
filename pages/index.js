import dynamic from 'next/dynamic';
import React from 'react';
import AboutMe from '../components/AboutMe';
import Projects from '@/components/Project';
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';
import AchievementsSection from '../components/AchievementsSection';
import Navbar from '@/components/Navbar';

//Server: not found error handler
const HeroSection = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
        <main>
        <Navbar />
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Projects />
        <EmailSection />
        </main>
        <Footer />
    </div>
  );
}