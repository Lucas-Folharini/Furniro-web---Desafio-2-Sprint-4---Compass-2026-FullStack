import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// @ts-expect-error - O Splide não exporta os tipos de CSS corretamente
import "@splidejs/react-splide/css";

import setup1 from "../assets/forniture-1.png";
import setup2 from "../assets/forniture-2.png";
import setup3 from "../assets/forniture-3.png";
import setup4 from "../assets/forniture-4.png";
import setup5 from "../assets/forniture-5.png";
import setup6 from "../assets/forniture-6.png";
import setup7 from "../assets/forniture-7.png";
import setup8 from "../assets/forniture-8.png";
import setup9 from "../assets/forniture-9.png";

export function Forniture() {
  return (
    <section className="w-full bg-white pt-16 pb-12 overflow-hidden flex flex-col items-center">
      
      {/* =========================================
          CABEÇALHO DA SEÇÃO
          ========================================= */}
      <div className="text-center mb-10">
        <span className="font-poppins font-semibold text-[20px] text-[#616161]">
          Share your setup with
        </span>
        <h2 className="font-poppins font-bold text-[40px] text-[#3A3A3A]">
          #FuniroFurniture
        </h2>
      </div>

      {/* =========================================
          CARROSSEL MOSAICO
          ========================================= */}
      <div className="w-full max-w-[1799px] mx-auto">
        <Splide
          extensions={{ AutoScroll }}
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            autoWidth: true,
            gap: "16px",
            pagination: false,
            arrows: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: true,
              pauseOnFocus: false,
            },
          }}
        >
          {/* COLUNA 1: Imagens 1 e 2 */}
          <SplideSlide>
            <div className="flex flex-col gap-4 items-end justify-center h-full">
              <img
                src={setup1}
                alt="Setup 1"
                className="w-[274px] h-[382px] object-cover hover:scale-105 transition-transform"
              />
              <img
                src={setup2}
                alt="Setup 2"
                className="w-[451px] h-[312px] object-cover hover:scale-105 transition-transform"
              />
            </div>
          </SplideSlide>

          {/* COLUNA 2: Imagens 3 e 4 */}
          <SplideSlide>
            <div className="flex flex-col gap-4 items-end justify-center h-full">
              <img
                src={setup3}
                alt="Setup 3"
                className="w-[381px] h-[323px] object-cover hover:scale-105 transition-transform"
              />
              <img
                src={setup4}
                alt="Setup 4"
                className="w-[344px] h-[242px] object-cover hover:scale-105 transition-transform"
              />
            </div>
          </SplideSlide>

          {/* COLUNA 3: Imagem 5 (Centro) */}
          <SplideSlide>
            <div className="flex justify-center items-center h-full">
              <img
                src={setup5}
                alt="Setup 5"
                className="w-[295px] h-[392px] object-cover hover:scale-105 transition-transform"
              />
            </div>
          </SplideSlide>

          {/* COLUNA 4: Imagens 6 e 7 */}
          <SplideSlide>
            <div className="flex flex-col gap-4 items-start justify-center h-full">
              <img
                src={setup6}
                alt="Setup 6"
                className="w-[290px] h-[348px] object-cover hover:scale-105 transition-transform"
              />
              <img
                src={setup7}
                alt="Setup 7"
                className="w-[425px] h-[433px] object-cover hover:scale-105 transition-transform"
              />
            </div>
          </SplideSlide>

          {/* COLUNA 5: Imagens 8 e 9 */}
          <SplideSlide>
            <div className="flex flex-col gap-4 items-start justify-center h-full">
              <img
                src={setup8}
                alt="Setup 8"
                className="w-[178px] h-[242px] object-cover hover:scale-105 transition-transform"
              />
              <img
                src={setup9}
                alt="Setup 9"
                className="w-[258px] h-[196px] object-cover hover:scale-105 transition-transform"
              />
            </div>
          </SplideSlide>
          
        </Splide>
      </div>
    </section>
  );
}