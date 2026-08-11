
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext"



// Function to get Greeting according to time 
const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 21) return "Good Evening";
  return "Good Night";
};


// Hero Card Function
const HeroCard = () => {

  const { user } = useContext(AuthContext)

  // state to store greeting 
  const [greeting] = useState(getGreeting());

  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-600 bg-[#121212] p-6 sm:p-8 lg:p-12">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255, .10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />


      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_.7fr] items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-5 ">

          <span className="inline-flex items-center gap-2  text-md text-lime-500">
            { greeting } 👋
          </span>

          <h1 className=" font-clash text-5xl sm:text-6xl lg:text-5xl font-semibold leading-[1.05] text-white">
            Welcome Back, 
            <br />
            <span className="text-lime-500">
              {user.name.split(" ")[0]} !
            </span>
          </h1>

          <p className=" max-w-md text-md leading-6 mb-2  text-zinc-500">
            Discover today's pics - hand - curated products across electronics fashion and more.
          </p>

          <div className=" flex flex-wrap gap-4">

            <NavLink to={"/shop-page"} className="duration-300 hover:border border border-lime-500 hover:bg-transparent hover:text-lime-500 hover:lime-orange-500 group text-sm flex items-center gap-2 rounded-xl bg-lime-500 px-5 py-2 font-semibold text-black transition ">
              Shop Now

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />

            </NavLink>

            <NavLink to={"/shop-page"} className="rounded-xl text-sm border border-zinc-700 px-5 py-2 text-white transition duration-300 hover:text-lime-500 hover:border-lime-500 ">
              View All Products
            </NavLink>

          </div>

        </div>

        {/* RIGHT */}
        <div className="h-full gap-4 flex flex-row  lg:flex-col items-end justify-center">

          <div className=" items-center h-fit w-fit flex flex-col bg-lime-400/10 py-4  px-7  rounded-2xl border  border-lime-400/40 ">
            <h1 className="text-3xl text-lime-400 font-clash font-bold">20+</h1>
            <p className="text-xs text-zinc-400">Products Available</p>
          </div>

          <div className=" items-center h-fit w-fit flex flex-col  py-4  px-7  rounded-2xl border  border-zinc-200/40 ">
            <h1 className="text-3xl  font-clash font-bold">Free</h1>
            <p className="text-xs text-zinc-400">Delivery on ₹999+</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroCard;