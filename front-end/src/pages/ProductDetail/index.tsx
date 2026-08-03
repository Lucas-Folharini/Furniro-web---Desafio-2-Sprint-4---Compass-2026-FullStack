import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductBreadcrumb } from "./sections/ProductBreadcrumb";
import { ProductDetailsSection } from "./sections/ProductDetailsSection";

const API_URL = "http://localhost:3000/products";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [productName, setProductName] = useState<string>("");

  useEffect(() => {
    async function fetchProductName() {
      try {
        const targetId = id || "1";
        const response = await fetch(`${API_URL}/${targetId}`);
        const data = await response.json();
        if (data?.name) {
          setProductName(data.name);
        }
      } catch (error) {
        console.error("Erro ao buscar nome do produto para o Breadcrumb:", error);
      }
    }

    fetchProductName();
  }, [id]);

  return (
    <div className="w-full min-h-screen bg-white pt-[110px]">
      <main>
        <ProductBreadcrumb productName={productName || "Detalhes do Produto"} />

        <ProductDetailsSection />

        {/* 3. Abas de Descrição, Informações e Avaliações (Próximo passo) */}
        {/* <ProductTabsSection /> */}

        {/* 4. Produtos Relacionados (Próximo passo) */}
        {/* <RelatedProductsSection /> */}
      </main>
    </div>
  );
}

export default ProductDetail;