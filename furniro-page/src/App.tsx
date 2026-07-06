import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <div className="w-full min-h-screen bg-white antialiased selection:bg-[#B88E2F] selection:text-white">
      <Header />

      <main>
        <Hero/>

      </main>

      <Footer/>
    </div>
  );
}

export default App;
