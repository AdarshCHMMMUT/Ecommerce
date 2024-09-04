import { Navbar } from "../../components/Navabar"
import { ProductCard } from "../../components/productCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { useCart } from "../../context/cart-context";
export const Home = () => {
    const [products, setProducts] = useState([]);
    const { cart } = useCart();

    console.log(cart);
    useEffect(()=>{
        (async () => {
            const data = await getAllProducts();
            console.log( "product ynha hai ", data);
            setProducts(data);

        })()
          
    },[])
    
    return(
        <>
        <Navbar/>
        <main className="flex flex-wrap gap-8 justify-center pt-8">
            {
                products?.length>0 && products.map(product => <ProductCard key = {product.id} product={product}/>)
            }
        </main>
             
            </>
    )
}