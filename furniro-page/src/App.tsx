import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowseRange } from "./sections/BrowseRange";
import { Hero } from "./sections/Hero";
import { OurProducts } from "./sections/OurProducts";
import { Rooms } from "./sections/Rooms";

function App() {
  return (
    <div className="w-full min-h-screen bg-white antialiased selection:bg-[#B88E2F] selection:text-white">
      <Header />

      <main>
        <Hero/>
        <BrowseRange/>
        <OurProducts/>
        <Rooms/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
