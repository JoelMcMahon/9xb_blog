import Hero from "@/components/home/Hero";
import MostRecentPosts from "@/components/home/MostRecentPosts";
import Footer from "@/components/navigation/Footer";
import SubNav from "@/components/navigation/SubNav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="py-8 px-5 md:px-10 2xl:px-32 flex min-h-screen flex-col">
        <Hero />
        <SubNav />
        <MostRecentPosts />
      </main>
      <Footer />
    </>
  );
}
