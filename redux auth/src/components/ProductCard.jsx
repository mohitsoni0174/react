import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-800">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Stock */}
        <span className="absolute right-3 top-3 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
          {product.stock} in stock
        </span>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Product Name */}
        <h2 className="truncate text-lg font-semibold text-white">
          {product.title}
        </h2>

        {/* Price */}
        <p className="mt-2 text-xl font-bold text-white">
          ${product.price.toFixed(2)}
        </p>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-400">Quantity</span>

          <div className="flex items-center overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
            {/* Minus */}
            <button
              type="button"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
              className="flex h-9 w-9 items-center justify-center text-lg text-slate-300 transition-colors hover:bg-slate-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              −
            </button>

            {/* Quantity */}
            <span className="flex h-9 w-10 items-center justify-center border-x border-slate-700 text-sm font-semibold text-white">
              {quantity}
            </span>

            {/* Plus */}
            <button
              type="button"
              onClick={increaseQuantity}
              disabled={quantity === product.stock}
              className="flex h-9 w-9 items-center justify-center text-lg text-slate-300 transition-colors hover:bg-slate-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              +
            </button>
          </div>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-600/30 active:translate-y-0 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
