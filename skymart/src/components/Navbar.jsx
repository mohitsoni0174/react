import { NavLink } from "react-router";
import {
  ShoppingCart,
  LogOut,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { useContext, useState } from "react";
import { MyStore } from "../context/MyContext";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { setIsCartOpen, cartItems } = useContext(MyStore);
  const { user, setUser } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0E0E0E] sticky top-0 z-50 border-b border-zinc-800">
      <div className="max-w-[1700px] mx-auto px-5 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="p-2 rounded-lg bg-lime-400 flex items-center justify-center">
            <Zap
              size={15}
              strokeWidth={3}
              className="text-black"
              fill="black"
            />
          </div>

          <h1 className="text-xl font-clash font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex text-sm text-zinc-400 gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop-page"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "hover:text-white"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about-page"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "hover:text-white"
            }
          >
            About
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Profile */}
          <button
            className="hidden sm:flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#171717] px-2 py-1"
          >
            <div className="leading-none rounded-lg px-2 py-1.5 bg-lime-400 text-black flex items-center justify-center font-bold">
              {user?.name?.charAt(0)}
            </div>

            <span className="text-zinc-300">
              {user?.name}
            </span>
          </button>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-xl border border-zinc-800 bg-[#171717] hover:border-lime-400 hover:text-lime-400 duration-300"
          >
            <ShoppingCart size={17} />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-lime-400 text-black text-xs flex items-center justify-center">
              {cartItems.length}
            </span>
          </button>

          {/* Logout */}
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
              toast.success("You are Logged Out!")
            }}
            className="p-2 rounded-xl border border-zinc-800 bg-[#171717] hover:border-red-400 hover:text-red-400 duration-300"
          >
            <LogOut size={17} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-zinc-800 bg-[#171717] text-white"
          >
            {isMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
      <nav className="lg:hidden border-t absolute w-full  z-50 border-zinc-800 bg-[#0E0E0E]">
        <div className="flex flex-col items-center pt-5 pb-10 space-y-5 border-b border-zinc-500">
    
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-zinc-300 hover:text-white"
            }
          >
            Home
          </NavLink>
    
          <NavLink
            to="/shop-page"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-zinc-300 hover:text-white"
            }
          >
            Shop
          </NavLink>
    
          <NavLink
            to="/about-page"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-zinc-300 hover:text-white"
            }
          >
            About
          </NavLink>
    
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
              setIsMenuOpen(false);
              toast.success("You are Logged Out!")
            }}
            className="flex items-center gap-3 text-red-400 hover:text-red-500 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
    
        </div>
      </nav>
      )}
    </header>
  );
};

export default Navbar;