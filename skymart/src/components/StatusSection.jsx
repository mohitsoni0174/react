import { ChartNoAxesCombined, Icon, Package, Star, Tags } from 'lucide-react';
import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const StatusSection = () => {

    const { cartItems, categorizedProducts, productsData } = useContext(MyStore);

    return (
        <section className="grid pt-10 gap-5 grid-cols-2 lg:grid-cols-4">

            <div className=" group flex flex-col sm:justify-center lg:flex-row lg:justify-start items-start gap-5 rounded-3xl border border-zinc-600 p-5 transition-all duration-300" >
        
              <div className={` bg-lime-300/10 flex p-3  items-center justify-center rounded-xl `} >
                <Package size={24} className="text-lime-300" strokeWidth={2} />
              </div>
        
              {/* Content */}
              <div>
                <h2 className="font-clash text-2xl font-semibold text-white">
                  { cartItems.length || 0 }
                </h2>
        
                <h3 className=" text-sm font-medium text-zinc-400">Cart Items</h3>
        
                <p className="mt-1 text-xs text-zinc-600">In your bag</p>
              </div>
            </div>


            <div className=" group flex flex-col sm:justify-center lg:flex-row lg:justify-start items-start gap-5 rounded-3xl border border-zinc-600 p-5 transition-all duration-300" >
        
              <div className={` bg-blue-500/10 flex p-3  items-center justify-center rounded-xl `} >
                <ChartNoAxesCombined size={24} className="text-blue-400" strokeWidth={2} />
              </div>
        
              {/* Content */}
              <div>
                <h2 className="font-clash text-2xl font-semibold text-white">
                    {
                        cartItems.reduce((sum, item) => {
                            return sum + item.price * item.quantity
                        }, 0).toFixed(2) || 0
                    }
                </h2>
        
                <h3 className=" text-sm font-medium text-zinc-400">Cart Value</h3>
        
                <p className="mt-1 text-xs text-zinc-600">Ready to checkout</p>
              </div>
            </div>


            <div className=" group flex flex-col sm:justify-center lg:flex-row lg:justify-start items-start gap-5 rounded-3xl border border-zinc-600 p-5 transition-all duration-300" >
        
              <div className={` bg-yellow-500/10 flex p-3  items-center justify-center rounded-xl `} >
                <Star size={24} className="text-yellow-400" strokeWidth={2} />
              </div>
        
              {/* Content */}
              <div>
                <h2 className="font-clash text-2xl font-semibold text-white">
                        { 
                            productsData.filter(item => { 
                                return item.rating >= 4.5
                            }).length || 0
                        }
                </h2>
        
                <h3 className=" text-sm font-medium text-zinc-400">Top Products </h3>
        
                <p className="mt-1 text-xs text-zinc-600">Highly Rated</p>
              </div>
            </div>


            <div className=" group flex flex-col sm:justify-center lg:flex-row lg:justify-start items-start gap-5 rounded-3xl border border-zinc-600 p-5 transition-all duration-300" >
        
              <div className={` bg-purple-500/10 flex p-3  items-center justify-center rounded-xl `} >
                <Tags size={24} className="text-purple-400" strokeWidth={2} />
              </div>
        
              {/* Content */}
              <div>
                <h2 className="font-clash text-2xl font-semibold text-white">
                { categorizedProducts.length || 0 }
                </h2>
        
                <h3 className=" text-sm font-medium text-zinc-400">Categories</h3>
        
                <p className="mt-1 text-xs text-zinc-600">To explore</p>
              </div>
            </div>

        </section>
    )
}

export default StatusSection