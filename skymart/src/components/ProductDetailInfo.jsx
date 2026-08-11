import { Star, Minus, Plus, Heart, RotateCcw, ChevronLeft, ChevronRight, ShieldCheck, Truck } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";



const ProductDetailInfo = ({ product, isInCart }) => {

  const { productsData, setIsCartOpen, addToCart, deleteCartProduct, cartItems, increaseQuantity, decreaseQuantity, favoriteProducts, toggleFavorite, goToNextProduct, goToPreviousProduct } = useContext(MyStore)

  const isFavorite = favoriteProducts?.find((item) => item.id === product.id);


  const currentIndex = productsData.findIndex(
    (item) => item.id === product.id
  );



  return (
    <div className="flex flex-col">
      {/* Category */}
      <span className="w-fit rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-0.5 text-xs text-lime-400">
        {product.category}
      </span>

      {/* Title */}
      <h1 className="text-md mt-4 font-clash font-bold leading-tight text-white sm:text-xl lg:text-2xl">
        {product.title}
      </h1>

      {/* Rating */}
      <div className="flex mt-3 flex-wrap items-center gap-3">
        <div className="flex text-yellow-400">
          {
            [...Array(4)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))
          }
          <Star size={14} />
        </div>

        <span className="font-semibold text-sm text-zinc-300">
          {product.rating}
        </span>

        <span className="text-zinc-500 text-sm">
          ({product.reviews?.length || 0} Reviews)
        </span>
      </div>

      <hr className=" my-5 border-zinc-700" />

      {/* Price */}
      <h2 className="text-2xl font-clash font-semibold text-lime-400 sm:text-2xl lg:text-3xl">
        ${product.price}
      </h2>

      <hr className="my-5 border-zinc-700" />

      {/* Description */}
      <p className="text-sm mb-5 text-zinc-400 lg:leading-6  ">
        {product.description}
      </p>

      {/* Quantity */}
      <div className={` ${isInCart ? "flex" : "hidden" } flex-col items-center justify-between gap-5 rounded-xl border border-zinc-700 px-5 py-3 sm:flex-row sm:gap-0`}>
        <span className="text-zinc-400">In cart:</span>

        <div className="flex items-center gap-4">
          <button onClick={ () => decreaseQuantity(product.id)} className="rounded-lg border border-zinc-700 p-2 transition hover:border-lime-400">
            <Minus size={14} />
          </button>

          <span className={`text-xl font-semibold`}>
            {cartItems.find(elem => elem.id === product.id)?.quantity || 0}
          </span>

          <button onClick={() => increaseQuantity(product.id)} className="rounded-lg border border-zinc-700 p-2 transition hover:border-lime-400">
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className=" flex mt-5  gap-4 ">
        { 
          isInCart ? <button onClick={() => deleteCartProduct(product)} className="flex-1 rounded-3xl bg-green-900/30 border border-green-700 py-3 font-semibold text-green-300 transition hover:bg-green-800/40">
          ✓ Added to Cart
          </button> : <button onClick={() => addToCart(product.id)} className="flex-1 rounded-3xl bg-lime-400 border py-3 font-semibold text-black font-clash transition hover:bg-lime-500">
          Add to Cart
        </button>
        }
        
        <div onClick={() => toggleFavorite(product)}>
          <button
            className={`rounded-2xl flex items-center justify-center p-3 border transition 
              ${ isFavorite ? "border-red-400 bg-red-500/10 hover:border-red-500" : "border-zinc-400/50 hover:border-lime-400"}`
            }
          >
            <Heart size={25} className={isFavorite ? "text-red-500 fill-red-500" : "text-zinc-400"} />
          </button>
        </div>
        
      </div>

      <button onClick={() => setIsCartOpen(true)} className="mt-5 rounded-2xl border border-zinc-700 py-3 text-zinc-300 transition hover:border-lime-400 hover:text-white">
        View Cart →
      </button>

      {/* Features */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <FeatureCard
          icon={Truck}
          title="Free Delivery"
          description="On orders over $50"
        />

        <FeatureCard
          icon={ShieldCheck}
          title="Secure Payment"
          description="256-bit SSL"
        />

        <FeatureCard
          icon={RotateCcw}
          title="Easy Returns"
          description="30-day return policy"
        />
      </div>

      {/* Navigation */}
      <div className="mt-7 flex flex-col gap-5 sm:flex-row">
        <button onClick={() => goToPreviousProduct(currentIndex)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-zinc-800 py-3 font-medium transition hover:bg-zinc-700">
          <ChevronLeft size={18} />
          Previous
        </button>

        <button onClick={() => goToNextProduct(currentIndex)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-lime-400 py-3 font-semibold text-black transition hover:bg-lime-300">
          Next
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailInfo;


