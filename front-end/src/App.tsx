import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowseRange } from "./pages/Home/sections/BrowseRange";
import { Forniture } from "./pages/Home/sections/Forniture";
import { Hero } from "./pages/Home/sections/Hero";
import { OurProducts } from "./pages/Home/sections/OurProducts";
import { Rooms } from "./pages/Home/sections/Rooms";
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
