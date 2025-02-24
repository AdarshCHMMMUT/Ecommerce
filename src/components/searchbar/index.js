import { useState, useEffect } from "react"
import { getAllProducts } from "../../api/getAllProducts";


const Searchbar = () => {
    const [value, setvalue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const fetchProducts = async () => {
        try {
            const products = await getAllProducts();
            if (Array.isArray(products) && products.length > 0) {
                const updatedProducts = products.filter(product => product.title
                    .toLowerCase().includes(value.toLowerCase()));
                console.log(updatedProducts)
                setSuggestions(updatedProducts);
            }
            else {
                setSuggestions([]);
            }
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [value])

    return (
        <div className="">
            <input
                className="text-black p-1 rounded-lg"
                type="text"
                placeholder="Search...."
                value={value}
                onChange={(e) => {
                    setvalue(e.target.value);
                }}
            />
            {suggestions.length > 0 ? (
                <ul className={`h-32 min-w-[120px] z-10 mt-1 p-1 bg-green-200 text-black absolute overflow-y-auto overflow-x-hidden rounded-lg ${!value ? "hidden" : "block"}`}>
                    {suggestions.map((product) => (
                        <li
                            className="list-none p-2 hover:rounded-lg hover:bg-green-600 cursor-pointer"
                            key={product.id}
                        >
                            {product.title}
                        </li>
                    ))}
                </ul>
            ) : value && (
                <div className="h-10 min-w-[120px] z-10 mt-1  p-3 bg-green-200 text-black absolute rounded-lg flex items-center justify-center">
                    No Products Found...
                </div>
            )}

        </div >
    )
};

export default Searchbar;
