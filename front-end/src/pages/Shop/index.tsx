import { useParams } from "react-router-dom";

import { Banner } from "./sections/Banner";
import { ProductsSection } from "./sections/ProductsSection";

export function Shop() {
  const { category = "" } = useParams();

  return (
    <div className="w-full min-h-screen bg-white">
      <main>
        <Banner />
        <ProductsSection key={category || "all"} category={category} />
      </main>
    </div>
  );
}

export default Shop;