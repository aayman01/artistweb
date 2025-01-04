import Header from "@/components/Header";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ArtistsWeb - Home</title>
        <meta
          name="description"
          content="Welcome to ArtistsWeb - Where art meets technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </>
  );
}
