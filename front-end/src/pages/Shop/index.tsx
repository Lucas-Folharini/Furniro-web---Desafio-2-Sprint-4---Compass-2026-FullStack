import { Banner } from "./sections/Banner"; // Ajustado o caminho relativo
import { FilterBar } from "./sections/FilterBar"; // Import do FilterBar que criamos

export function Shop() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main>
        <Banner />
        <FilterBar />
      </main>
    </div>
  );
}

export default Shop;