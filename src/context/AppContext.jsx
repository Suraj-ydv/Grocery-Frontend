import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch Seller Status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      setIsSeller(data.success || false);
    } catch (error) {
      setIsSeller(false);
      console.error("Error fetching seller status:", error);
    }
  };

  // Fetch All Products
  const fetchProducts = async () => {
    setProducts(dummyProducts); // Replace with API call if needed
  };

  // Add Product to Cart
  const addToCart = (itemId) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCartItems(updatedCart);
    toast.success("Added to Cart");
  };

  // Update Product Quantity
  const updateCartItem = (itemId, quantity) => {
    const updatedCart = { ...cartItems, [itemId]: quantity };
    setCartItems(updatedCart);
    toast.success("Cart Updated");
  };

  // Remove Product from Cart
  const removeFromCart = (itemId) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      updatedCart[itemId] -= 1;
      if (updatedCart[itemId] <= 0) delete updatedCart[itemId];
      setCartItems(updatedCart);
      toast.success("Removed from cart");
    }
  };

  // Get total items count
  const getCartCount = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  // Get total cart price
  const getCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const item = products.find((p) => p._id === id);
      if (item) total += item.offerPrice * cartItems[id];
    }
    return Math.floor(total * 100) / 100;
  };

  useEffect(() => {
    fetchSeller();
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
    axios,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
