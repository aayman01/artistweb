import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import YourDigitalPartner from "@/components/YourDigitalPatner";
import {ScrollText} from "@/components/ScrollText";
import Services from "@/components/Services";
import DigitalGoal from "@/components/DigitalGoal";
import WeAreGood from "@/components/WeAreGood";
import CraftingDigital from "@/components/CraftingDigital";
import FeedBack from "@/components/FeedBack";
import ImageAndPartner from "@/components/ImageAndPartner";

export default function Home() {
  return (
    <>
      <main className="max-w-full mx-auto">
        <NavBar />
        <HeroSection />
        <WorkSection />
        <Services />
        <YourDigitalPartner />
        <ImageAndPartner/>
        <ScrollText />
        <DigitalGoal />
        <CraftingDigital/>
        <WeAreGood />
        <FeedBack/>
        <Footer />
      </main>
    </>
  );
}
