import { useParams } from "react-router-dom";
import { ProductBreadcrumb } from "./sections/ProductBreadcrumb";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  // Exemplo de mockup de nome do produto (depois integrado com seu estado/API pelo ID)
  const productName = id ? `Produto ${id}` : "Asgaard sofa";

  return (
    <div className="w-full min-h-screen bg-white pt-[110px]">
      <main>
        <ProductBreadcrumb productName={productName} />

        {/* 2. Galeria de Fotos e Detalhes da Compra (Próximo bloco) */}
        {/* <ProductDetailsSection productId={id} /> */}

        {/* 3. Abas de Descrição, Informações e Avaliações */}
        {/* <ProductTabsSection /> */}

        {/* 4. Produtos Relacionados */}
        {/* <RelatedProductsSection /> */}
      </main>
    </div>
  );
}

export default ProductDetail;