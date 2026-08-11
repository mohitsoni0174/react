import { useParams } from "react-router";
import ProductDetailImage from "../components/ProductDetailImage";
import ProductDetailInfo from "../components/ProductDetailInfo";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";


const ProductDetailsPage = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { cartItems, productsData } = useContext(MyStore)

  const getAProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAProduct();
  }, [id]);

  let isInCart = cartItems.find((elem) => elem.id === product.id) 

  const relatedProducts = productsData?.filter( (item) => item.category === product.category && item.id !== product.id );

  
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductDetailImage product={product} />
        <ProductDetailInfo isInCart={ isInCart } product={product} />
      </div>

      <div className="mx-auto max-w-7xl mt-10  py-8 lg:py-12">
        <h1 className="text-3xl font-clash font-semibold ">Related Products</h1>

        <div className="grid py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          { 
            relatedProducts.map((product) => {
  
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
    </section>
  );
};

export default ProductDetailsPage;