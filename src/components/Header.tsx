import logo from "../assets/logo.svg";
import iconCart from "../assets/iconCart.svg";
import iconProfile from "../assets/iconProfile.svg";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-[999] w-full bg-white transition-all flex justify-center shadow-sm h-[100px]">
      
      <div className="w-full max-w-[1183px] px-5 lg:px-0 flex items-center justify-between h-full">
        
        {/* =========================================
            LOGO E MARCA
            ========================================= */}
        <a
          href="#"
          className="flex flex-1 items-center justify-start relative focus:outline-none"
        >
      
          <img 
            src={logo} 
            alt="Furniro Logo" 
            className="w-10 md:w-12 h-auto mr-[5px] lg:absolute lg:right-full lg:mr-0" 
          />
          <span className="font-montserrat font-bold text-[28px] md:text-[34px] leading-none tracking-tight text-[#000000] lg:pl-[5px]">
            Furniro
          </span>
        </a>

        {/* =========================================
            CENTRO
            ========================================= */}
       
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-[75px] font-poppins font-medium text-[#000000] text-base">
          <a href="#" className="hover:text-[#B88E2F] transition-colors whitespace-nowrap">
            Home
          </a>
          <a href="#shop" className="hover:text-[#B88E2F] transition-colors whitespace-nowrap">
            Shop
          </a>
          <a href="#about" className="hover:text-[#B88E2F] transition-colors whitespace-nowrap">
            About
          </a>
          <a href="#contact" className="hover:text-[#B88E2F] transition-colors whitespace-nowrap">
            Contact
          </a>
        </nav>

        {/* =========================================
            AÇÕES DO USUÁRIO
            ========================================= */}
        <div className="flex flex-1 items-center justify-end gap-5 lg:gap-[35px] text-[#000000]">
          <img src={iconProfile} alt="Icone Perfil" className="w-6 lg:w-auto h-auto cursor-pointer hover:opacity-75 transition-opacity" />
          <img src={iconCart} alt="Icone Carrinho" className="w-6 lg:w-auto h-auto cursor-pointer hover:opacity-75 transition-opacity" />
          
          {/* qnd menor que md */}
          <button className="md:hidden flex items-center justify-center p-1 focus:outline-none hover:text-[#B88E2F] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}