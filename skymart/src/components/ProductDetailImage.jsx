

const ProductDetailImage = ({ product }) => {

  if (!product.images) {
    return (
      <div className="flex h-75 sm:h-100 md:h-125 lg:h-150 w-full items-center justify-center rounded-3xl bg-zinc-300 p-10">
        <h1 className="text-lg sm:text-xl md:text-2xl font-clash font-medium text-black">
          Image Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="w-full h-75 sm:h-100 md:h-125 lg:h-150 rounded-3xl bg-zinc-300 p-4 sm:p-6 md:p-8 lg:p-10">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};


export default ProductDetailImage;



