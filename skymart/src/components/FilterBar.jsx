import { Search, ChevronDown } from "lucide-react";
import { useSearchParams } from "react-router";

const FilterBar = () => {


  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all-categories";

  const search = searchParams.get("search") || "";

  const selectedSort = searchParams.get("sort") || "featured";

  return (
    <section className="rounded-2xl border border-zinc-700 bg-[#111111] p-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Search */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 rounded-xl border border-zinc-700 bg-[#1c1c1c] px-4 py-2 transition-colors duration-200 focus-within:border-lime-400/60">
            <Search className="text-zinc-500" size={22} />

            <input
              value={search}
              onChange={(e) => { 
                const params = new URLSearchParams(searchParams);
                params.set("search", e.target.value);
                setSearchParams(params);
              }}
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-white placeholder:text-zinc-500 outline-none"
            />
          </div>
        </div>

        {/* Category */}
        <div className="lg:col-span-2">
          <div className="relative">
            <select value={selectedCategory}
              onChange={(e) => {
                const params = new URLSearchParams(searchParams);

                if (e.target.value === "all-categories") {
                  params.delete("category");
                } else {
                  params.set("category", e.target.value);
                }
                
                setSearchParams(params);
              }}
              className="w-full appearance-none rounded-xl border border-zinc-700 bg-[#1c1c1c] px-4 py-2 pr-10 text-white outline-none transition-colors duration-200 focus-within:border-lime-400/60"
            >
              <option value="all-categories">All Categories</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
              <option value="home-decoration">Home Decoration</option>
              <option value="kitchen-accessories">Kitchen Accessories</option>
              <option value="laptops">Laptops</option>
              <option value="mens-shirts">Mens Shirts</option>
              <option value="mens-watches">Mens Watches</option>
              <option value="mens-shoes">Mens Shoes</option>
              <option value="mobile-accessories">Mobile Accessories</option>
              <option value="smartphones">Smart Phones</option>
            </select>
        
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="lg:col-span-2">
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => {
                const params = new URLSearchParams(searchParams);
                params.set("sort", e.target.value);
                setSearchParams(params);
              }}
              className="w-full appearance-none rounded-xl border border-zinc-700 bg-[#1c1c1c] px-4 py-2 pr-10 text-white outline-none transition-colors duration-200 focus-within:border-lime-400/60"
            >
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="top-rated">Top Rated</option>
              <option value="lowest-rated">Lowest Rated</option>
            </select>
        
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FilterBar;