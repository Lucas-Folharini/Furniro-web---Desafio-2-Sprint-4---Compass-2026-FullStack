import { Link } from "react-router-dom";

import diningImg from "../../../assets/dining-range.png";
import livingImg from "../../../assets/living-range.png";
import bedroomImg from "../../../assets/bedroom-range.png";

export function BrowseRange() {
  return (
    <section className="w-full bg-white pt-[56px] pb-[56px] flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center">
        <div className="text-center mb-[62px]">
          <h2 className="font-poppins font-bold text-[32px] text-[#333333] mb-1">
            Browse The Range
          </h2>
          <p className="font-poppins text-[20px] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1183px] px-5 lg:px-0">
          <Link to="/shop/dining" className="flex flex-col items-center gap-[30px]">
            <img
              src={diningImg}
              alt="Dining Room Setup"
              className="w-full rounded-[10px] object-cover transition-transform hover:scale-105 cursor-pointer"
            />
            <h3 className="font-poppins font-semibold text-[24px] text-[#333333]">
              Dining
            </h3>
          </Link>

          <Link to="/shop/living" className="flex flex-col items-center gap-[30px]">
            <img
              src={livingImg}
              alt="Living Room Setup"
              className="w-full rounded-[10px] object-cover transition-transform hover:scale-105 cursor-pointer"
            />
            <h3 className="font-poppins font-semibold text-[24px] text-[#333333]">
              Living
            </h3>
          </Link>

          <Link to="/shop/bedroom" className="flex flex-col items-center gap-[30px]">
            <img
              src={bedroomImg}
              alt="Bedroom Setup"
              className="w-full rounded-[10px] object-cover transition-transform hover:scale-105 cursor-pointer"
            />
            <h3 className="font-poppins font-semibold text-[24px] text-[#333333]">
              Bedroom
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
