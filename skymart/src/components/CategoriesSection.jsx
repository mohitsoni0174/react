import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const CategoriesSection = () => {

  const navigate = useNavigate();

  const { categorizedProducts } = useContext(MyStore);

  const categories = [
    {
      name: "Smartphones",
      slug: "smartphones",
      icon: "📱",
    },
    {
      name: "Beauty",
      slug: "beauty",
      icon: "💄",
    },
    {
      name: "Groceries",
      slug: "groceries",
      icon: "🛒",
    },
    {
      name: "Mens Shoes",
      slug: "mens-shoes",
      icon: "👟",
    },
    {
      name: "Sunglasses",
      slug: "sunglasses",
      icon: "😎",
    },
    {
      name: "Tops",
      slug: "tops",
      icon: "👗",
    },
    {
      name: "Vehicles",
      slug: "vehicle",
      icon: "🚗",
    },
    {
      name: "Laptops",
      slug: "laptops",
      icon: "💻",
    },
  ];

  return (
    <div className="grid gap-5 py-5 grid-cols-2 lg:grid-cols-4">

      {categories.map((category) => {

        const totalItems = categorizedProducts.find((item) => item.slug === category.slug)?.products.length || 0;

        return (
          <div
            key={category.slug}
            onClick={() => navigate(`/shop-page?category=${category.slug}`) }
            className="group flex flex-col items-center justify-center rounded-3xl border border-zinc-600 bg-[#131313] p-4 cursor-pointer text-white transition-all duration-200 hover:border-lime-400/60 hover:text-lime-400"
          >
            <div className="text-3xl pb-2">
              {category.icon}
            </div>

            <h3 className="font-clash text-xl font-semibold">
              {category.name}
            </h3>

            <p className="text-sm text-zinc-500">
              {totalItems} items
            </p>
          </div>
        );
      })}

    </div>
  );
};

export default CategoriesSection;