import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../../components/ProductCard"; 

const API_URL = "http://localhost:3000/products";

export function RelatedProductsSection() {
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRelatedProducts() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error("Erro ao carregar produtos relacionados:", error);
      }
    }

    fetchRelatedProducts();
  }, []);

  return (
    <section className="w-full pt-[55px] pb-[88px] bg-white font-poppins border-t border-[#D9D9D9]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[99px] flex flex-col items-center">
        
        <h2 className="text-[36px] font-medium text-black leading-[100%] text-center mb-[26px]">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] w-full justify-items-center mb-[44px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button
          onClick={() => navigate("/shop")}
          className="w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] leading-[150%] bg-white hover:bg-[#B88E2F] hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
        >
          Show More
        </button>

      </div>
    </section>
  );
}