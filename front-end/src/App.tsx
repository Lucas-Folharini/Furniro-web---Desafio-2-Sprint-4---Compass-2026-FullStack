import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";

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

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;