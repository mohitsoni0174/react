import { useContext } from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";


const ProductCard = ({ product, isInCart }) => {

  const { addToCart, deleteCartProduct } = useContext(MyStore);
  
  const navigate = useNavigate();



  return (
    <div
      className={`group h-100 overflow-hidden rounded-3xl border bg-[#111111] transition-all duration-300  ${
        product.featured
          ? "border-lime-400"
          : "border-zinc-700 hover:border-lime-400/60"
      }`}
    >
      {/* Image Section */}
      <div onClick={() => navigate(`/product-detail/${product.id}`) } className="relative h-[50%] overflow-hidden bg-zinc-300 p-6">

        {/* Category Badge */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-zinc-600 px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>

        {/* Product Image */}
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[50%] flex-col justify-between p-4">
        {/* Category */}
        <p className="text-xs uppercase tracking-wider text-zinc-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 text-md font-clash  text-white">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={12}
                className={
                  index < Math.round(product.rating)
                    ? "fill-yellow-500 text-yellow-500"
                    : "fill-zinc-700 text-zinc-700"
                }
              />
            ))}
          </div>

          <span className="text-xs text-zinc-500">
            ({product.reviews.length || 0})
          </span>
        </div>

        <hr className="border-zinc-700" />

        {/* Price & Button */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-clash font-semibold text-lime-400">
            ${product.price}
          </h3>

          {
            isInCart ? (
              <button onClick={() => deleteCartProduct(product)} className="flex items-center gap-2 rounded-full border border-green-700 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
                <Check size={16} />
                Added
              </button>
            ) : (
              <button
                onClick={() => addToCart(product.id)}
                className="flex items-center gap-2 rounded-full bg-lime-400 px-3 py-1 text-sm font-semibold text-black transition-colors duration-300 hover:bg-lime-300">
                <ShoppingCart size={16} />
                Add
              </button>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;





