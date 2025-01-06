import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import YourDigitalPartner from "@/components/YourDigitalPatner";
import {ScrollText} from "@/components/ScrollText";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <main className="max-w-full mx-auto">
        <NavBar />
        <HeroSection />
        <WorkSection />
        <Services />
        <YourDigitalPartner />
        <ScrollText />
        <Footer />
      </main>
    </>
  );
}
