
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useContext } from "react";
import {MyStore} from "../context/MyContext"

const CartProductCard = ({ item }) => {

    const {
        deleteCartProduct,
        increaseQuantity,
        decreaseQuantity
    } = useContext(MyStore)

    return (
        <div className="flex items-center gap-4 rounded-2xl border border-zinc-700 bg-[#111111] px-4 py-3 hover:border-lime-400/60 transition-all duration-300">
                                  
            {/* Product Image */}
            <div className="h-22 w-20 shrink-0 overflow-hidden rounded-xl bg-zinc-300 p-2">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
            </div>


            {/* Product Info */}
            <div className="flex flex-1 flex-col justify-between">

                <div className="flex flex-col ">
                    <h3 className=" text-sm font-clash font-medium text-white">
                        {item.title}
                    </h3>
                    <p className=" text-xl font-clash font-medium text-lime-400">
                        ${item.price}
                    </p>
                    <p className="text-xs  text-zinc-500">
                        ${item.price} each 
                    </p>
                </div>

                {/* Quantity */}
                <div className="flex mt-1 items-center justify-between">

                    <div className="flex items-center gap-3">

                        <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex p-1  items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition hover:border-lime-400 hover:text-white">
                            <Minus size={14} />
                        </button>

                        <span className="min-w-4 text-center text-lg font-medium text-white">
                            {item.quantity || 1}
                        </span>

                        <button onClick={() => increaseQuantity(item.id)} className="flex p-1 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition hover:border-lime-400 hover:text-white">
                            <Plus size={14} />
                        </button>

                    </div>

                    <button onClick={() => deleteCartProduct(item) } className="text-red-500 transition hover:text-red-400">
                        <Trash2 size={15} />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default CartProductCard