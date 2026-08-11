import { useContext } from "react";
import { Search } from "lucide-react";
import FilterBar from "../components/FilterBar";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router";

const ShopPage = () => {

  const { productsData, cartItems } = useContext(MyStore)
  
  const [searchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "featured";

  let filteredProducts = [...productsData] 
  
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }
  
  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  
  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  
  if (sort === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  
  if (sort === "top-rated") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  
  if (sort === "lowest-rated") {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  }


  return (
    <div className="lg:px-32 flex flex-col gap-5 px-5 py-10">
      
      <div>
        <h1 className="text-4xl font-clash font-semibold">
          { selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : "All Products" }
        </h1>
        
        <p className="text-sm mt-2 text-zinc-400"><span>{filteredProducts.length}</span> Products found</p>
      </div>

      <FilterBar />

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        { 
          filteredProducts.map((product) => {

            let isInCart = cartItems.find((elem) => elem.id === product.id) 

            return <ProductCard
              isInCart={isInCart}
              key={product.id}
              product={product}
            />
          })
        }
      </div>

    </div>
  )
}

export default ShopPage




