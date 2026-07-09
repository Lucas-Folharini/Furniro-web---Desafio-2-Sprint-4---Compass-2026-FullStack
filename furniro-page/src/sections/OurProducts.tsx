import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice: string | null;
  image: string;
  badge: string | null;
  badgeColor: string | null;
}

export function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  // busca no jsonserver
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      <h2 className="font-poppins font-bold text-[40px] text-[#3A3A3A] mb-8 text-center">
        Our Products
      </h2>

      {/* =========================================
          GRID PRINCIPAL
          ========================================= */}
      <div className="w-full max-w-[1236px] px-5 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
        {products.map((product) => (
          /* =========================================
             CARD INDIVIDUAL
             ========================================= */
          <div
            key={product.id}
            className="group relative bg-[#F4F5F7] flex flex-col overflow-hidden"
          >
            <div className="relative w-full h-[301px]">
            
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {product.badge && (
                <div
                  className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-sm z-10"
                  style={{
                    backgroundColor: product.badgeColor || "transparent",
                  }}
                >
                  {product.badge}
                </div>
              )}
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-poppins font-semibold text-[24px] text-[#3A3A3A]">
                {product.name}
              </h3>
              <p className="font-poppins font-medium text-[#898989] text-[16px]">
                {product.description}
              </p>
              <div className="flex items-center gap-4 mt-1">
                <span className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="font-poppins text-[16px] text-[#B0B0B0] line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="absolute inset-0 bg-[#3A3A3A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
              <button className="bg-white text-[#B88E2F] font-semibold py-3 px-10 hover:bg-[#B88E2F] hover:text-white transition-colors">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="font-poppins font-semibold text-[16px] text-[#B88E2F] border border-[#B88E2F] bg-white py-3 px-16 hover:bg-[#B88E2F] hover:text-white transition-colors">
        Show More
      </button>
    </section>
  );
}
