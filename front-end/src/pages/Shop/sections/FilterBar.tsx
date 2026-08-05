import { useState } from "react";

import filterIcon from "../../../assets/filter.svg";
import ballsIcon from "../../../assets/balls.svg";
import framesIcon from "../../../assets/frames.svg";

interface FilterBarProps {
  currentPage?: number;
  itemsPerPage?: number;
  totalItems?: number;
  onItemsPerPageChange?: (count: number) => void;
  onSortChange?: (sortBy: string) => void;
  onFilterClick?: () => void;
  onViewChange?: (view: "grid" | "list") => void;
}

export function FilterBar({
  currentPage = 1,
  itemsPerPage = 16,
  totalItems = 32,
  onItemsPerPageChange,
  onSortChange,
  onFilterClick,
  onViewChange,
}: FilterBarProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showCount, setShowCount] = useState<number>(itemsPerPage);
  const [sortBy, setSortBy] = useState<string>("Default");

  const showingFrom = totalItems === 0 ? 0 : (currentPage - 1) * showCount + 1;
  const showingTo = Math.min(currentPage * showCount, totalItems);

  const handleViewChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    if (onViewChange) onViewChange(mode);
  };

  const handleShowCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    if (rawValue === "") {
      setShowCount(1);
      if (onItemsPerPageChange) onItemsPerPageChange(1);
      return;
    }

    const val = Number(rawValue);

    if (!Number.isNaN(val)) {
      const sanitizedValue = Math.max(1, Math.floor(val));
      setShowCount(sanitizedValue);
      if (onItemsPerPageChange) onItemsPerPageChange(sanitizedValue);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSortBy(val);
    if (onSortChange) onSortChange(val);
  };

  return (
    <section className="w-full bg-[#F9F1E7] h-[100px] flex items-center justify-center px-4 lg:px-16">
      <div className="w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-[24px] flex-wrap justify-center md:justify-start">
          
          <button
            onClick={onFilterClick}
            className="flex items-center gap-[12px] cursor-pointer text-black hover:opacity-75 transition-opacity"
          >
            <img src={filterIcon} alt="Filter" className="w-[25px] h-[25px] object-contain" />
            <span className="font-poppins text-[20px] font-normal leading-none text-black">
              Filter
            </span>
          </button>

          <button
            onClick={() => handleViewChange("grid")}
            className={`cursor-pointer transition-opacity ${
              viewMode === "grid" ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
            title="Grid View"
          >
            <img src={ballsIcon} alt="Grid View" className="w-[28px] h-[28px] object-contain" />
          </button>

          <button
            onClick={() => handleViewChange("list")}
            className={`cursor-pointer transition-opacity ${
              viewMode === "list" ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
            title="List View"
          >
            <img src={framesIcon} alt="List View" className="w-[24px] h-[24px] object-contain" />
          </button>

          <div className="h-[37px] w-[2px] bg-[#9F9F9F] hidden sm:block mx-2" />

          <span className="font-poppins text-[16px] font-normal leading-none text-black">
            Showing {showingFrom}–{showingTo} of {totalItems} results
          </span>
        </div>

        <div className="flex items-center gap-[27px] flex-wrap justify-center">
          
          <div className="flex items-center gap-[17px]">
            <label htmlFor="show-input" className="font-poppins text-[20px] font-normal leading-none text-black">
              Show
            </label>
            <input
              id="show-input"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              value={showCount}
              onChange={handleShowCountChange}
              onKeyDown={(e) => {
                if (["e", "E", "+", "-", "."].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              className="w-[55px] h-[55px] bg-white text-[#9F9F9F] font-poppins text-[20px] font-normal text-center focus:outline-none focus:ring-1 focus:ring-[#B88E2F] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          <div className="flex items-center gap-[17px]">
            <label htmlFor="sort-select" className="font-poppins text-[20px] font-normal leading-none text-black">
              Short by
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={handleSortChange}
              className="w-[188px] h-[55px] bg-white text-[#9F9F9F] font-poppins text-[20px] font-normal px-4 focus:outline-none focus:ring-1 focus:ring-[#B88E2F] cursor-pointer"
            >
              <option value="Default">Default</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Newest">Newest</option>
            </select>
          </div>

        </div>

      </div>
    </section>
  );
}