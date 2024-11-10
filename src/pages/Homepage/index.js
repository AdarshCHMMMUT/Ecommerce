import { Navbar } from "../../components/Navabar"
import { ProductCard } from "../../components/productCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { useCart } from "../../context/cart-context";
import { getAllCategories } from "../../api/getAllCategores";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { cart } = useCart();

    console.log(cart);
    useEffect(()=>{
        (async () => {
            const product = await getAllProducts();
            const categories = await getAllCategories();
            const updatedCategories = [...categories, {id:'1a', name:'All'}]
            setProducts(product);
            // setCategories(categories);
            setCategories(updatedCategories);


        })()
       
          
    },[])

    const onCategoryClick = (category)=>{
        console.log({category});
        const filterByCategories = category.toLowerCase()=== 'all'? products: products?.length>0 && products.filter(product => product.category.name
            .toLowerCase() === category.toLowerCase());
            setProducts(filterByCategories);
        
    }
    
    return(
        <>
        <Navbar/>
        <main className="pt-8">
            <div className="flex gap-4 justify-center mb-4">
                {
                    categories?.length>0 && categories.map(category=> <div key={category.id} className="bg-green-400
                         font-semibold rounded-full p-1 hover:cursor-pointer" onClick={()=> onCategoryClick (category.name)}>{category.name}</div>     )
                }
            </div>
            <div className = "flex flex-wrap gap-8 justify-center">
            {
                products?.length> 0 ? products.map(product => <ProductCard key = {product.id} product={product}/>):<h2>No product found. Please try another category</h2>
            }
            </div>
            
        </main>
             
            </>
    )
}