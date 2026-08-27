import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { getProductsDataApi } from "../api/productApi";

const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setIsLoading(true);
      setError("");

      const data = await getProductsDataApi();
      setProductsData(data.products);
    } catch (error) {
      console.error(error);
      setError("Failed to load products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading &&
        Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}

      {!isLoading && error && <p>{error}</p>}

      {!isLoading &&
        !error &&
        productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ShopPage;
