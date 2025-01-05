import NavBar from "@/components/NavBar";
import Features from "../components/Features";
// import HeroSection from "../components/HeroSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-9">
        <NavBar/>
        <HeroSection />
        <Features />
        <Footer />
      </main>
    </>
  );
}
