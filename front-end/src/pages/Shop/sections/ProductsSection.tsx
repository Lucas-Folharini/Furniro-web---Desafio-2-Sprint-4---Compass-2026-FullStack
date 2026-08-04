import { useEffect, useMemo, useState } from "react";
import { FilterBar } from "./FilterBar";
import { ProductCard, type Product } from "../../../components/ProductCard"; 

interface ShopProduct extends Product {
  category: string;
  sku?: string;
}

interface ProductsSectionProps {
  category: string;
}

const API_URL = "http://localhost:3000/products";

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
  const [allProducts, setAllProducts] = useState<ShopProduct[]>([]);
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

        const payload = (await response.json()) as ShopProduct[] | { data?: ShopProduct[] };
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
      ? allProducts.filter((product) => product.category?.toLowerCase() === selectedCategory)
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="flex items-center justify-center gap-[38px] mt-[30px]">
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