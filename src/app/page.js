import NavBar from "@/components/NavBar";
import Features from "../components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-9">
        <NavBar/>
        <HeroSection />
        <WorkSection />
        <Features />
        <Footer />
      </main>
    </>
  );
}
