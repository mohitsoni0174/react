const CategoryCard = ({emoji, title, items,}) => {
  return (
    <div className=" group flex flex-col items-center justify-center rounded-3xl border
      border-zinc-600 bg-[#131313] p-4 cursor-pointer text-white 
      transition-all duration-200 hover:border-lime-400/60 hover:text-lime-400"
    >
      {/* Emoji */}
        <div className="text-3xl pb-2">
            {emoji}
        </div>

      <h3 className="font-clash text-xl font-semibold">
        {title}
      </h3>

      <p className="text-sm text-zinc-500">
        {items} items
      </p>
    </div>
  );
};

export default CategoryCard;