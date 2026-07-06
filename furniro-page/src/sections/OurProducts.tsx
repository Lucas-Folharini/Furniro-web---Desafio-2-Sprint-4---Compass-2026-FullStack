import prod1 from "../assets/prod-1.jpeg";
import prod2 from "../assets/prod-2.jpeg";
import prod3 from "../assets/prod-3.jpeg";
import prod4 from "../assets/prod-4.jpeg";
import prod5 from "../assets/prod-5.jpeg";
import prod6 from "../assets/prod-6.jpeg";
import prod7 from "../assets/prod-7.jpeg";
import prod8 from "../assets/prod-8.jpeg";

/* =========================================
   ARRAY DOS PRODUTOS
   n esquecer de mudar pro jsonserver dps
   ========================================= */
const productsData = [
  { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", image: prod1, badge: "-30%", badgeColor: "bg-[#E97171]" },
  { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: null, image: prod2, badge: null, badgeColor: null },
  { id: 3, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", image: prod3, badge: "-50%", badgeColor: "bg-[#E97171]" },
  { id: 4, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", oldPrice: null, image: prod4, badge: "New", badgeColor: "bg-[#2EC1AC]" },
  { id: 5, name: "Grifo", description: "Night lamp", price: "Rp 1.500.000", oldPrice: null, image: prod5, badge: null, badgeColor: null },
  { id: 6, name: "Muggo", description: "Small mug", price: "Rp 150.000", oldPrice: null, image: prod6, badge: "New", badgeColor: "bg-[#2EC1AC]" },
  { id: 7, name: "Pingky", description: "Cute bed set", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", image: prod7, badge: "-50%", badgeColor: "bg-[#E97171]" },
  { id: 8, name: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", oldPrice: null, image: prod8, badge: "New", badgeColor: "bg-[#2EC1AC]" },
];

export function OurProducts() {
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      
      <h2 className="font-poppins font-bold text-[40px] text-[#3A3A3A] mb-8 text-center">
        Our Products
      </h2>

      {/* =========================================
          GRID PRINCIPAL
          ========================================= */}
      <div className="w-full max-w-[1236px] px-5 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
        
        {productsData.map((product) => (
          
          /* =========================================
             CARD INDIVIDUAL
             ========================================= */
          <div key={product.id} className="group relative bg-[#F4F5F7] flex flex-col overflow-hidden">
            
          
            <div className="relative w-full h-[301px]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              
              {product.badge && (
                <div className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-sm z-10 ${product.badgeColor}`}>
                  {product.badge}
                </div>
              )}
            </div>

            {/* tEXTOS */}
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