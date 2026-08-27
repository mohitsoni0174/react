import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
      {/* Image Skeleton */}
      <div className="h-64 animate-pulse bg-slate-800" />

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Product Title */}
        <div className="h-5 w-3/4 animate-pulse rounded-md bg-slate-800" />

        {/* Price */}
        <div className="h-6 w-1/4 animate-pulse rounded-md bg-slate-800" />

        {/* Quantity */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 animate-pulse rounded-md bg-slate-800" />

          <div className="h-9 w-28 animate-pulse rounded-lg bg-slate-800" />
        </div>

        {/* Add To Cart Button */}
        <div className="h-12 w-full animate-pulse rounded-xl bg-slate-800" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
