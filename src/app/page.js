import Header from "@/components/Header";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-9">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </>
  );
}
