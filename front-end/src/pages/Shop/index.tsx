import { useParams } from "react-router-dom";

import { Banner } from "./sections/Banner";
import { ProductsSection } from "./sections/ProductsSection";
import { FeaturesSection } from "./sections/FeaturesSection";

export function Shop() {
  const { category = "" } = useParams();

  return (
    <div className="w-full min-h-screen bg-white">
      <main>
        <Banner />
        <ProductsSection key={category || "all"} category={category} />
        <FeaturesSection />
      </main>
    </div>
  );
}

export default Shop;