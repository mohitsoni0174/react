import { ArrowRight, Box, HeartHandshake, HeartPlus, ShieldCheck, Star, Truck, Users, Zap } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router';

const AboutPage = () => {

  const navigate = useNavigate();

  return (
    <div className="py-10 px-4 lg:px-32">

      {/* Heading and Sort Description  */}
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="p-3  w-fit rounded-xl bg-lime-400 flex items-center justify-center ">
            <Zap
              size={32}
              strokeWidth={3}
              className="text-black"
              fill="black"
            />
        </div>
        <h1 className="lg:text-5xl text-3xl  font-clash font-bold ">About Sky<span className="text-lime-400">Mart</span></h1>
        <p className="lg:text-lg text-sm text-zinc-500 max-w-2xl text-center">SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.</p>
      </div>


      {/* About Status Cards Container  */}
      <div className="max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 m-auto ">
        <div className="border border-zinc-100/40 flex flex-col items-center  p-4 rounded-2xl">
          <Box className="text-lime-400 mb-1" />
          <h1 className="font-clash font-semibold text-3xl">20K+</h1>
          <p className="text-xs mt-1 text-zinc-500">Products</p>
        </div>

        <div className="border border-zinc-100/40 flex flex-col items-center  p-4 rounded-2xl">
          <Users className="text-lime-400 mb-1" />
          <h1 className="font-clash font-semibold text-3xl">50K+</h1>
          <p className="text-xs mt-1 text-zinc-500">Happy Customers</p>
        </div>

        <div className="border border-zinc-100/40 flex flex-col items-center  p-4 rounded-2xl">
          <Star className="text-lime-400 mb-1" />
          <h1 className="font-clash font-semibold text-3xl">4.9</h1>
          <p className="text-xs mt-1 text-zinc-500">Average Rating</p>
        </div>

        <div className="border border-zinc-100/40 flex flex-col items-center  p-4 rounded-2xl">
          <Truck className="text-lime-400 mb-1" />
          <h1 className="font-clash font-semibold text-3xl">99.9%</h1>
          <p className="text-xs mt-1 text-zinc-500">On-Time Delivery</p>
        </div>
      </div>



      {/* Our Story  */}
      <div className="max-w-5xl flex flex-col gap-4 mt-5 m-auto border border-zinc-100/40 p-8 rounded-3xl">
        <h2 className="font-clash font-semibold text-3xl">Out Story</h2>
        <p className="text-sm font-light text-zinc-500 ">SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually enjoyable?</p>
        <p className="text-sm font-light text-zinc-500 ">Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.</p>
        <p className="text-sm font-light text-zinc-500 ">We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.</p>
      </div>



      {/* We Stand For */}
      <div className="max-w-5xl m-auto flex flex-col gap-5 items-center py-5  mt-10 ">

        <h1 className="font-clash font-semibold text-3xl ">What We Stand For</h1>

        <div className=" gap-8 grid gird-cold-1 lg:grid-cols-2">

          <div className="border w-full  border-zinc-100/40 hover:border-lime-400/50 transition-all duration-300 p-5 pr-15 rounded-2xl flex gap-3">
            <div className="p-2 mt-1 h-fit w-fit text-lime-500 bg-lime-400/10 rounded-xl ">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="font-clash font-semibold text-md">Trust</h2>
              <p className="text-sm text-zinc-500 font-light ">Every product is verified for quality and authenticity before listing.</p>
            </div>
          </div>

          <div className="border w-full  border-zinc-100/40 hover:border-lime-400/50 transition-all duration-300 p-5 pr-15 rounded-2xl flex gap-3">
            <div className="p-2 mt-1 h-fit w-fit text-lime-500 bg-lime-400/10 rounded-xl ">
              <Truck size={22} />
            </div>
            <div>
              <h2 className="font-clash font-semibold text-md">Speed</h2>
              <p className="text-sm text-zinc-500 font-light ">We obsess over delivery times so your orders arrive when promised.</p>
            </div>
          </div>

          <div className="border w-full  border-zinc-100/40 hover:border-lime-400/50 transition-all duration-300 p-5 pr-15 rounded-2xl flex gap-3">
            <div className="p-2 mt-1 h-fit w-fit text-lime-500 bg-lime-400/10 rounded-xl ">
              <HeartHandshake size={22} />
            </div>
            <div>
              <h2 className="font-clash font-semibold text-md">Community </h2>
              <p className="text-sm text-zinc-500 font-light ">Built around real customer feedback, not just business metrics.</p>
            </div>
          </div>

          <div className="border w-full  border-zinc-100/40 hover:border-lime-400/50 transition-all duration-300 p-5 pr-15 rounded-2xl flex gap-3">
            <div className="p-2 mt-1 h-fit w-fit text-lime-500 bg-lime-400/10 rounded-xl ">
              <Star size={22} />
            </div>
            <div>
              <h2 className="font-clash font-semibold text-md">Quality</h2>
              <p className="text-sm text-zinc-500 font-light ">We curate the best — no filler, no junk, just great products.</p>
            </div>
          </div>          

        </div>

      </div>
      



      {/* Ready to Shop */}
      <div className="max-w-5xl flex flex-col items-center gap-2 mt-10 m-auto border py-10 px-5 text-center border-lime-400/40 rounded-3xl">
        <h1 className="font-clash font-semibold text-3xl">Ready To Shop?</h1>
        <p className="text-sm text-zinc-500 font-light">Explore thousands of products at unbeatable prices.</p>
        <button onClick={() => navigate("/shop-page")} className=" group flex items-center gap-1 border
              text-md text-black bg-lime-400 py-2 px-5 cursor-pointer hover:bg-transparent hover:text-lime-400 hover:border-lime-400
              transition-all duration-200 font-clash font-bold mt-3 rounded-xl "
              >
                Browse Products
                <ArrowRight
                  size={20} 
                />
            </button>
      </div>

    </div>
  )
}

export default AboutPage