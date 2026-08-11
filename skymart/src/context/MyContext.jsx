import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const MyStore = createContext();

export const StoreContextProvider = ({ children }) => { 

  // Getting Products From API 
  const [productsData, setProductsData] = useState( JSON.parse(localStorage.getItem("productsData")) || [])
  const [categorizedProducts, setCategorizedProducts] = useState([]);

  // States for the cartItems and if cart is open or not 
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

  // state for favorite products 
  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("favoriteProducts")) || [];
  });



  useEffect(() => { 
    const getProducts = async () => { 
      try {
        const res = await axios.get('https://dummyjson.com/products?limit=200')
        let products = res.data.products;
        setProductsData(products)
        
        // ------------------------------------ //
        // Extracting the products category wise Category and storing into categories state
        const groupedCategories = products.reduce((acc, product) => {
          const existingCategory = acc.find(
            item => item.slug === product.category
          );
        
          if (existingCategory) {
            existingCategory.products.push(product);
          } else {
            acc.push({
              slug: product.category,
              products: [product],
            });
          }
        
          return acc;
        }, []);
        
        setCategorizedProducts(groupedCategories);
        // -------------------------------------- //
      }
      catch (error) {
        console.log("Error =>", error)
      }
    }

    getProducts();
  }, [])





  // Add to cart and if item is available in cart item will be updated Functionality 
  const addToCart = (id) => {
    const existingItem = cartItems.find(item => item.id === id);
  
    // Item already exists
    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
          return (item.id === id) ? { ...item, quantity: item.quantity + 1 } : item
        }
      );
  
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  
      toast.success(`${existingItem.title} quantity updated!`);
      return;
    }
  
    // Item doesn't exist
    const product = productsData.find(product => product.id === id);
  
    const updatedCart = [ ...cartItems, { ...product, quantity: 1 } ];
  
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  
    toast.success(`${product.title} added to cart!`);
  };



  // Delete Cart Product Functionality
  const deleteCartProduct = (product) => { 
    let updatedCartItems = cartItems.filter(elem => elem.id !== product.id)
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
    setCartItems(updatedCartItems);
    toast.success(`${product.title} removed from cart`);
  }



  const increaseQuantity = (id) => { 
    const existingItem = cartItems.find(item => item.id === id);
  
    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
          return (item.id === id) ? { ...item, quantity: item.quantity + 1 } : item
        }
      );
  
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return;
    }
  }



  const decreaseQuantity = (id) => {
  const updatedCart = cartItems
    .map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    })
    .filter((item) => item.quantity > 0); // Remove items with quantity 0

  setCartItems(updatedCart);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
};




// this functionality will toggle the product from favoriteProducts 
const toggleFavorite = (product) => {
  const exists = favoriteProducts.find(
    (item) => item.id === product.id
  );

  let updatedFavorites;

  if (exists) {
    updatedFavorites = favoriteProducts.filter( (item) => item.id !== product.id );
  } else {
    updatedFavorites = [...favoriteProducts, product];
  }

  setFavoriteProducts(updatedFavorites);
  localStorage.setItem("favoriteProducts", JSON.stringify(updatedFavorites) );
};
   





  const navigate = useNavigate();

  const goToPreviousProduct = (currentIndex) => {
    if (currentIndex > 0) {
      navigate(`/product-detail/${productsData[currentIndex - 1].id}`);
    }
    };
  
  const goToNextProduct = (currentIndex) => {
    if (currentIndex < productsData.length - 1) {
      navigate(`/product-detail/${productsData[currentIndex + 1].id}`);
    }
  };




  


  // Returning the Context Provider 
  return <MyStore.Provider value={{
    productsData,
    setProductsData,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    categorizedProducts,
    addToCart,
    deleteCartProduct,
    increaseQuantity,
    decreaseQuantity,
    favoriteProducts,
    toggleFavorite,
    goToPreviousProduct,
    goToNextProduct
  }}
  >{children}</MyStore.Provider>
}


