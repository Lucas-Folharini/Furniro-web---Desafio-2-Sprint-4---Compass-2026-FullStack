import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:3000/products";
const BASE_URL = "http://localhost:3000";

export interface ProductData {
  id: number | string;
  name?: string;
  longDescription?: string; 
  additionalInfo?: string[];
  gallery?: string[];
  tabImages?: string[];
}

export function ProductTabsSection() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<"description" | "additional">("description");
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const targetId = id || "1";
        const response = await fetch(`${API_URL}/${targetId}`);
        const data: ProductData = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Erro ao carregar os dados das abas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const getImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    if (path.startsWith("/")) return `${BASE_URL}${path}`;
    return `${BASE_URL}/${path}`;
  };

  const imagesToShow =
    product?.tabImages && product.tabImages.length >= 2
      ? product.tabImages
      : product?.gallery && product.gallery.length >= 2
      ? product.gallery
      : ["/images/prod-1.jpeg", "/images/prod-2.jpeg"];

  if (loading) {
    return (
      <div className="w-full py-12 text-center text-[#9F9F9F] font-poppins">
        Carregando detalhes...
      </div>
    );
  }

  return (
    <section className="w-full border-t border-[#D9D9D9] pt-[48px] pb-[66px] font-poppins">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[99px]">
        
        <div className="flex items-center justify-center gap-[52px] mb-[37px]">
          <button
            onClick={() => setActiveTab("description")}
            className={`text-[24px] leading-none transition-colors ${
              activeTab === "description"
                ? "font-medium text-black" 
                : "font-normal text-[#9F9F9F] hover:text-black/70" 
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("additional")}
            className={`text-[24px] leading-none transition-colors ${
              activeTab === "additional"
                ? "font-medium text-black" 
                : "font-normal text-[#9F9F9F] hover:text-black/70" 
            }`}
          >
            Additional Information
          </button>
        </div>

        <div className="w-full max-w-[1026px] mx-auto mb-[36px]">
          {activeTab === "description" ? (
            <div className="text-[16px] font-normal text-[#9F9F9F] text-justify leading-[24px] space-y-4">
              {product?.longDescription ? (
                product.longDescription.split("\n").map((paragraph, index) => (
                  paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
                ))
              ) : (
                <p>
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
              )}
            </div>
          ) : (
            <div className="text-[16px] font-normal text-[#9F9F9F]">
              {product?.additionalInfo && product.additionalInfo.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {product.additionalInfo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>Nenhuma informação adicional cadastrada para este produto.</p>
              )}
            </div>
          )}
        </div>

        <div className="w-full max-w-[1239px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center justify-center">
          {imagesToShow.slice(0, 2).map((imgSrc, idx) => (
            <div
              key={idx}
              className="w-full max-w-[605px] h-[348px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center p-6 mx-auto overflow-hidden"
            >
              <img
                src={getImageUrl(imgSrc)}
                alt={`Detalhe ${idx + 1}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/605x348/F9F1E7/9F9F9F?text=Imagem+do+Produto";
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}