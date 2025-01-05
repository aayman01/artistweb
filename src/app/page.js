import NavBar from "@/components/NavBar";
import Features from "../components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import YourDigitalPartner from "@/components/YourDigitalPatner";
import { ScrollText } from "@/components/ScrollText";

export default function Home() {
  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto px-9">
          <NavBar />
          <HeroSection />
          <WorkSection />
          <YourDigitalPartner />
        </div>
        <ScrollText />
        <Features />
        <Footer />
      </main>
    </>
  );
}
