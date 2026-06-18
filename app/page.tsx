import RevealArmer from "./components/RevealArmer";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import DailyDrop from "./components/DailyDrop";
import Hunt from "./components/Hunt";
import Finds from "./components/Finds";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import MobileCta from "./components/MobileCta";

export default function Page() {
  return (
    <>
      <RevealArmer />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <DailyDrop />
        <Hunt />
        <Finds />
        <Visit />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
