import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Project from "../components/Project";
import EmailSection from "../components/EmailSection";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";

export default function Home(){
	return(
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutMe/>
      <AchievementsSection/>
      <Project />
      <EmailSection />
      <Footer />
    </div>
	);
}