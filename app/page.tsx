import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Custom from "./components/Custom";
import Atelier from "./components/Atelier";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Collection />
        <Custom />
        <Atelier />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
