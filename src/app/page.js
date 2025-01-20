// import Image from "next/image";
import CommunitySlider from "./components/CommunitySlider";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Head from 'next/head'
import PrimarySchoolSlider from "./components/PrimarySchoolSlider";
import ScholarshipSection from './components/ScholarshipSection'
import Footer from "./components/Footer";
import AssociatationSection from "./components/AssociatationSection";

export default function Home() {
  return (
    <div className="min-h-screen">
    <Head>
      <title>The Uber for Scholarships</title>
      <meta name="description" content="A platform connecting the world with financially struggling students" />
    </Head>

    <Navbar />
    <HeroSection />
     <FeatureSection />
     <CommunitySlider />
     <PrimarySchoolSlider />
     <ScholarshipSection />
     <AssociatationSection />
     <Footer />
  </div>
  );
}
