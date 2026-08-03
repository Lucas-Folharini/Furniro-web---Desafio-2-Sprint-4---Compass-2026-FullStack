import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { FilterBar } from "./FilterBar";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice: string | null;
  image: string;
  badge: string | null;
  badgeColor: string | null;
  category: string;
  sku: string;
}

interface ProductsSectionProps {
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const API_URL = "http://localhost:3000/products";

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative bg-[#F4F5F7] flex flex-col overflow-hidden">
      <div className="relative w-full h-[301px]">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />

        {product.badge && (
          <div
            className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-sm z-10"
            style={{ backgroundColor: product.badgeColor || "#E97171" }}
          >
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-poppins font-semibold text-[24px] text-[#3A3A3A]">
          {product.name}
        </h3>
        <p className="font-poppins font-medium text-[#898989] text-[16px] truncate">
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
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-white text-[#B88E2F] font-semibold py-3 px-10 hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer"
          >
            Add to cart
          </button>

          <div className="flex gap-4 text-white text-sm">
            <span className="cursor-pointer hover:text-[#B88E2F]">Share</span>
            <span className="cursor-pointer hover:text-[#B88E2F]">Compare</span>
            <span className="cursor-pointer hover:text-[#B88E2F]">Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const normalizePrice = (price: string) => {
  const parsed = Number(price.replace(/[^\d]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
};

const getSortValue = (sortBy: string) => {
  switch (sortBy) {
    case "Price: Low to High":
      return "low-high";
    case "Price: High to Low":
      return "high-low";
    default:
      return "default";
  }
};

export function ProductsSection({ category }: ProductsSectionProps) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState("Default");
  const [isLoading, setIsLoading] = useState(true);

  const selectedCategory = category?.toLowerCase() || "";

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        const payload = (await response.json()) as Product[] | { data?: Product[] };
        const data = Array.isArray(payload) ? payload : payload.data ?? [];

        setAllProducts(data);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Erro ao buscar produtos da Shop:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  const filteredProducts = useMemo(() => {
    const categoryProducts = selectedCategory
      ? allProducts.filter((product) => product.category.toLowerCase() === selectedCategory)
      : allProducts;

    const sortValue = getSortValue(sortBy);

    return [...categoryProducts].sort((a, b) => {
      if (sortValue === "low-high") {
        return normalizePrice(a.price) - normalizePrice(b.price);
      }

      if (sortValue === "high-low") {
        return normalizePrice(b.price) - normalizePrice(a.price);
      }

      return 0;
    });
  }, [allProducts, selectedCategory, sortBy]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
  const pageProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const addToCart = (product: Product) => {
    const storageKey = "furniro-cart";
    const storedCart = localStorage.getItem(storageKey);
    const cartItems = storedCart ? JSON.parse(storedCart) : [];

    cartItems.push(product);
    localStorage.setItem(storageKey, JSON.stringify(cartItems));

    toast.success(`${product.name} added to cart!`, {
      style: {
        background: "#2EC1AC",
        color: "#fff",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#2EC1AC",
      },
    });
  };

  return (
    <section className="w-full bg-white">
      <FilterBar
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onItemsPerPageChange={(count) => {
          setItemsPerPage(count);
          setCurrentPage(1);
        }}
        onSortChange={(value) => setSortBy(value)}
      />

      <div className="w-full bg-white py-10 px-4 lg:px-0">
        <div className="w-full max-w-[1240px] mx-auto">

          {isLoading ? (
            <div className="text-center py-12 font-poppins text-[#898989]">
              Loading products...
            </div>
          ) : pageProducts.length === 0 ? (
            <div className="text-center py-12 font-poppins text-[#898989]">
              No products found for this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {pageProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          )}

          {/* =========================================
              PAGINAÇÃO EXACT MATCH FIGMA (Frame 72)
             ========================================= */}
          <div className="flex items-center justify-center gap-[38px] mt-[30px]">
            {/* Páginas numéricas (1, 2, 3...) */}
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === currentPage;

              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-[60px] h-[60px] rounded-[10px] font-poppins text-[20px] font-normal leading-none flex items-center justify-center cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#B88E2F] text-white"
                      : "bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Botão Next (Group 71: 98px x 60px, Font Light 300) */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage >= totalPages}
              className="w-[98px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-black font-poppins text-[20px] font-light leading-none flex items-center justify-center cursor-pointer hover:bg-[#B88E2F] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}