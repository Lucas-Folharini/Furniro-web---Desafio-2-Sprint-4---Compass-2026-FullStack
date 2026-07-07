import logo from "../assets/logo.svg";
import iconCart from "../assets/iconCart.svg";
import iconProfile from "../assets/iconProfile.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all flex justify-center">
      <div className="relative w-full max-w-[1440px] pl-[93px] pr-[100px] h-20 flex items-center justify-between border-2 border-red-500">
        {/* =========================================
            BLOCO 1: LOGO E MARCA 
            ========================================= */}
        <a
          href="#"
          className="flex items-center gap-[5px] focus:outline-none z-10"
        >
          <img src={logo} alt="Furniro Logo" className="w-12 h-auto" />
          <span className="font-montserrat font-bold text-[34px] leading-none tracking-tight text-[#000000]">
            Furniro
          </span>
        </a>

        {/* =========================================
            BLOCO 2: NAVEGAÇÃO PRINCIPAL
            =========================================
        */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-[75px] font-poppins font-medium text-[#000000] text-base">
          <a href="#" className="hover:text-[#B88E2F] transition-colors">
            Home
          </a>
          <a href="#shop" className="hover:text-[#B88E2F] transition-colors">
            Shop
          </a>
          <a href="#about" className="hover:text-[#B88E2F] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#B88E2F] transition-colors">
            Contact
          </a>
        </nav>

        {/* =========================================
            BLOCO 3: AÇÕES DO USUÁRIO 
            ========================================= */}
        <div className="flex items-center gap-[35px] text-[#000000] z-10">
          <img src={iconProfile} alt="Icone Perfil" />
          <img src={iconCart} alt="Icone Carrinho" />
        </div>
      </div>
    </header>
  );
}
