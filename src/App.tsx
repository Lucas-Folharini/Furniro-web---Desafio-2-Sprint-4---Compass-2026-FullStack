import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowseRange } from "./sections/BrowseRange";
import { Forniture } from "./sections/Forniture";
import { Hero } from "./sections/Hero";
import { OurProducts } from "./sections/OurProducts";
import { Rooms } from "./sections/Rooms";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: 110,
        }}
      />

      <Header />

      <main>
        <Hero />
        <BrowseRange />
        <OurProducts />
        <Rooms />
        <Forniture />
      </main>

      <Footer />
    </div>
  );
}

export default App;
