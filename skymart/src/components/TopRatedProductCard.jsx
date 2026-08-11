import { ShoppingBag } from 'lucide-react';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { MyStore } from '../context/MyContext';

const TopRatedProductCard = ({ product }) => {

  const navigate = useNavigate()
  
  const { addToCart } = useContext(MyStore)


  return (
    <div  className="flex flex-row border border-zinc-700 rounded-xl items-center justify-between p-2 transition-all duration-300 hover:border-lime-400/50">

      <div onClick={() => navigate(`/product-detail/${product.id}`) } className="flex w-[90%] flex-row gap-3 items-center">
        <img className="w-10 h-10 rounded-lg" src={ product?.images[0]} alt="" />
        <div className="flex flex-col">
          <p className="text-xs -mb-1 text-zinc-300">{ product?.title }</p>
          <h4 className="text-lg font-semibold text-lime-400 font-clash "> $ { product?.price }</h4>
        </div>
      </div>

      <div onClick={() => addToCart(product.id) } className="flex items-center justify-center p-2 bg-lime-300/10 text-lime-400 rounded-md hover:bg-lime-300/60 transition-all duration-300">
        <ShoppingBag size={14}  />
      </div>

    </div>
  )
}

export default TopRatedProductCard





