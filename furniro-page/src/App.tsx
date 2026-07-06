import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowseRange } from "./sections/BrowseRange";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <div className="w-full min-h-screen bg-white antialiased selection:bg-[#B88E2F] selection:text-white">
      <Header />

      <main>
        <Hero/>
        <BrowseRange/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
