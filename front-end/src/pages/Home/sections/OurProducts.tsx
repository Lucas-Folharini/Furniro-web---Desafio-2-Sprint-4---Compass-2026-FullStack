import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard, type Product } from "../../../components/ProductCard";

// =========================================
// MOCK DE DADOS (Provisório)
// =========================================
const PRODUTOS_MOCK: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: "/prod-1.jpeg",
    badge: "-30%",
    badgeColor: "#E97171",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    image: "/prod-2.jpeg",
    badge: null,
    badgeColor: null,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/prod-3.jpeg",
    badge: "-50%",
    badgeColor: "#E97171",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    image: "/prod-4.jpeg",
    badge: "New",
    badgeColor: "#2EC1AC",
  },
];

export function OurProducts() {
  const [products] = useState<Product[]>(PRODUTOS_MOCK);

  // =========================================
  // CONSUMO DA API
  // =========================================
  /*
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);
  */

  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      <h2 className="font-poppins font-bold text-[40px] text-[#3A3A3A] mb-8 text-center">
        Our Products
      </h2>

      <div className="w-full max-w-[1183px] px-5 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link to="/shop">
        <button className="font-poppins font-semibold text-[16px] text-[#B88E2F] border border-[#B88E2F] bg-white py-3 px-16 hover:bg-[#B88E2F] hover:text-white transition-colors">
          Show More
        </button>
      </Link>
    </section>
  );
}