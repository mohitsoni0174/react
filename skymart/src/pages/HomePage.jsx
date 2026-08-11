
import HeroCard from '../components/HeroCard';
import TopRatedProductCard from '../components/TopRatedProductCard';
import PolicySection from '../components/PolicySection';

import { ArrowRight } from 'lucide-react';

import { NavLink, useNavigate } from 'react-router';
import StatusSection from '../components/StatusSection';
import CategoriesSection from '../components/CategoriesSection';
import { useContext } from 'react';
import { MyStore } from '../context/MyContext';


const HomePage = () => {

  const navigate = useNavigate();

  const { productsData } = useContext(MyStore);

  let topRated = productsData.filter(product => product.rating >= 4.95)
  let newArrivals = productsData.filter(product => product.rating <= 2.56) 
  
  return (
    <div className="lg:px-32 px-5 py-10">
      {/* Home Page Main Card  */}
      <HeroCard />


      {/* Status Section  */}
      <StatusSection />

      {/* Category Section  */}
      <section className="pt-15">
        {/* Heading */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-clash text-2xl font-semibold text-white">
            Shop by Category
          </h2>
          <NavLink to={"/shop-page"} className=" group flex items-center gap-2
            text-md text-lime-400
            transition-all duration-200 hover:text-lime-500"
            >
              View All
              <ArrowRight
              size={18}
            />
          </NavLink>
        </div>

        {/* Categories Grid */}
        <CategoriesSection />
      </section>


      {/* Top Rated and New Arrivals  */}
      <section className="min-h-50 grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
        {/* Top Rated Products Container  */}
        <div className="w-full h-full bg-[#131313] rounded-3xl p-5">
          {/* Heading */}
          <div className="flex items-center justify-between ">
            <h2 className="font-clash font-semibold text-xl">⭐️ Top Rated </h2>
            <button onClick={() => navigate("/shop-page?sort=top-rated")} className=" group flex items-center gap-2
              text-sm text-lime-400 cursor-pointer
              transition-all duration-200 hover:text-lime-500"
              >
                See All
                <ArrowRight
                  size={14}
                />
            </button>
          </div>

          {/* products container */}
          <div className="flex flex-col gap-4  py-5">
            {/*Top Rated product card  */}
            { 
              topRated.map(product => { 
                return <TopRatedProductCard key={product.id} product={ product } />
              })
            }
          </div>
        </div>

        {/* New Arrivals Products Container  */}
        <div className="w-full h-full bg-[#131313] rounded-3xl p-5">
          {/* Heading */}
          <div className="flex items-center justify-between ">
            <h2 className="font-clash font-semibold text-xl">⚡️ New Arrivals  </h2>
            <NavLink to={"shop-page"} className=" group flex items-center gap-2
              text-sm text-lime-300 cursor-pointer
              transition-all duration-200 hover:text-lime-500"
              >
                See All
                <ArrowRight
                  size={14}
              />
            </NavLink>
          </div>

          {/* products container */}
          <div className="flex flex-col gap-4  py-5">
            {/* New Arrival product card  */} 
            { 
              newArrivals.map(product => { 
                return <TopRatedProductCard key={product.id} product={ product } />
              })
            }
          </div>
        </div>

      </section>


      {/* Policy Section  */}
      <PolicySection />

    </div>
  )
}

export default HomePage


