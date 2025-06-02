import { useState, useCallback, useEffect } from "react";
import axios from "axios";


const Searchbar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async (searchTerm) => {
    try {
      const response = await axios.get(`https://thirdcopyback.vercel.app/api/user/items`);
      const products = response.data.items;

      if (Array.isArray(products)) {
        const filtered = products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, []);
  useEffect(() => {
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetchSuggestions(value);
    }, 300); 
    
    return () => clearTimeout(delayDebounce);
  }, [value, fetchSuggestions]);


  return (
    <div className="relative w-full max-w-lg"> {/* made it wider */}
      <input
        className="w-full text-black p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
        type="text"
        placeholder="Search for products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {suggestions.length > 0 ? (
        <ul className={`max-h-48 w-full z-20 mt-1 p-1 bg-white text-black absolute overflow-y-auto overflow-x-hidden rounded-lg shadow-lg ${!value ? "hidden" : "block"}`}>
          {suggestions.map((product) => (
            <li
              className="list-none p-2 hover:bg-green-500 hover:text-white cursor-pointer rounded"
              key={product.id}

            >
              {product.title}
            </li>
          ))}
        </ul>
      ) : value && (
        <div className="h-12 w-full z-20 mt-1 p-3 bg-white text-black absolute rounded-lg flex items-center justify-center shadow-lg">
          No Products Found...
        </div>
      )}
    </div>
  );
};

export default Searchbar;
