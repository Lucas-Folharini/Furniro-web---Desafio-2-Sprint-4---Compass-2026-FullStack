export function Footer() {
  return (
    <footer className="w-full bg-white flex justify-center pt-16 pb-8 border-t border-gray-200">
      <div className="w-full max-w-[1440px] pl-[54px] pr-[100px] flex flex-col">
        
        {/* =========================================
            PARTE SUPERIOR: 4 Colunas
            ========================================= */}

        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          
          {/* COLUNA 1: MARCA E ENDEREÇO */}
          <div className="flex flex-col gap-10 max-w-[285px]">
            <h2 className="font-poppins font-bold text-2xl text-black">Funiro.</h2>
            <p className="font-poppins text-gray-400 text-base">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>

            {/* substituir dps */}
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-sm hover:bg-gray-100 cursor-pointer transition-colors">f</div>
              <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-sm hover:bg-gray-100 cursor-pointer transition-colors">ig</div>
              <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-sm hover:bg-gray-100 cursor-pointer transition-colors">tw</div>
              <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-sm hover:bg-gray-100 cursor-pointer transition-colors">in</div>
            </div>
          </div>

          {/* COLUNA 2: LINKS */}
          <div className="flex flex-col gap-8">
            <h3 className="font-poppins font-medium text-gray-400">Links</h3>
            <nav className="flex flex-col gap-6 font-poppins font-medium text-black">
              <a href="#" className="hover:text-[#B88E2F] transition-colors">Home</a>
              <a href="#" className="hover:text-[#B88E2F] transition-colors">Shop</a>
              <a href="#" className="hover:text-[#B88E2F] transition-colors">About</a>
              <a href="#" className="hover:text-[#B88E2F] transition-colors">Contact</a>
            </nav>
          </div>

          {/* COLUNA 3: HELP */}
          <div className="flex flex-col gap-8">
            <h3 className="font-poppins font-medium text-gray-400">Help</h3>
            <nav className="flex flex-col gap-6 font-poppins font-medium text-black">
              <a href="#" className="hover:text-[#B88E2F] transition-colors">Payment Options</a>
              <a href="#" className="hover:text-[#B88E2F] transition-colors">Returns</a>
              <a href="#" className="hover:text-[#B88E2F] transition-colors">Privacy Policies</a>
            </nav>
          </div>

          {/* COLUNA 4: NEWSLETTER */}
          <div className="flex flex-col gap-8">
            <h3 className="font-poppins font-medium text-gray-400">Newsletter</h3>
            <form className="flex gap-4 items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="font-poppins text-sm text-black placeholder-gray-400 border-b border-black pb-1 focus:outline-none w-[200px]"
              />
              <button 
                type="submit" 
                className="font-poppins font-medium text-sm text-black border-b border-black pb-1 uppercase hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* =========================================
            PARTE INFERIOR: Linha e Copyright
            ========================================= */}
        <hr className="border-gray-200 mb-8" />
        <p className="font-poppins text-black text-base">
          2023 furino. All rights reverved
        </p>

      </div>
    </footer>
  );
}