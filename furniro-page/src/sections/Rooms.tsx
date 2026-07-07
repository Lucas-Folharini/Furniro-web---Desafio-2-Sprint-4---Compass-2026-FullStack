import { Splide, SplideSlide } from '@splidejs/react-splide';

// @ts-expect-error - O Splide não exporta os tipos de CSS corretamente
import '@splidejs/react-splide/css'

import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";

const roomsData = [
  { id: 1, title: "Inner Peace", category: "01 —— Bed Room", image: room1 },
  { id: 2, title: "Modern Setup", category: "02 —— Living Room", image: room2 },
  { id: 3, title: "Cozy Corner", category: "03 —— Guest Room", image: room3 },
];

export function Rooms() {
  return (
    /* Fundo bege */
    <section className="w-full bg-[#FCF8F3] py-11 overflow-hidden">
      {/* =========================================
            CONTAINER PRINCIPAL
            =========================================*/}
      <div className="w-full max-w-[1440px] mx-auto pl-[54px] flex flex-col lg:flex-row items-center gap-10">
        {/* =========================================
            LADO ESQUERDO
            ========================================= */}
        <div className="flex flex-col items-start w-full lg:w-1/3 max-w-[422px] pr-5 lg:pr-0">
          <h2 className="font-poppins font-bold text-[40px] leading-[48px] text-[#3A3A3A] mb-2">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="font-poppins font-medium text-[16px] text-[#616161] mb-6">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] text-white font-semibold text-[16px] py-3 px-9 hover:bg-[#9d7725] transition-colors">
            Explore More
          </button>
        </div>

        {/* =========================================
            LADO DIREITO
            ========================================= */}
        <div className="w-full lg:w-2/3 ml-auto">
          <Splide
            options={{
              type: "loop",
              perPage: 2, //  2 imagens por vez
              perMove: 1,
              gap: "24px",
              pagination: true, // bolinhas embaixo das img
              arrows: true,
              drag: "free", // arrastar com o mouse
              breakpoints: {
                1024: { perPage: 2 },
                768: { perPage: 1 }, // No celular, mostra só 1 por vez
              },
            }}
            className="pb-10" // para não cortar as bolinhas da paginação
          >
            {roomsData.map((room) => (
              <SplideSlide key={room.id}>
                <div className="relative group w-full h-[582px]">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover rounded-[4px]"
                  />

                  {/*========================================= 
                  CAIXA BRANCA DE INFO
                  =========================================*/}
                  <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-sm p-6 flex flex-col gap-2 min-w-[217px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-poppins font-medium text-[16px] text-[#616161]">
                      {room.category}
                    </span>
                    <h3 className="font-poppins font-semibold text-[28px] text-[#3A3A3A]">
                      {room.title}
                    </h3>

                    <button className="absolute bottom-0 -right-12 w-12 h-12 bg-[#B88E2F] text-white flex items-center justify-center hover:bg-[#9d7725] transition-colors">
                      ➔
                    </button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
