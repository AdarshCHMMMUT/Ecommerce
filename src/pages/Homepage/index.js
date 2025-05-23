import { Navbar } from "../../components/Navabar";
import { ProductCard } from "../../components/productCard";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { getAllCategories } from "../../api/getAllCategores";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export const Home = () => {
    const [allproducts, setallproducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    // const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        (async () => {
            // setLoading(true);
            const productlist = await getAllProducts();
            const categories = await getAllCategories();
            const updatedCategories = [...categories, { id: '1a', name: 'All' }]
            setProducts(productlist); 
            setallproducts(productlist);     
            setCategories(updatedCategories);
        })()
    }, [])
    console.log(products);
    const onCategoryClick = async(category) => {
        const filterByCategories = category.toLowerCase() === 'all' ? allproducts : allproducts?.length > 0 && allproducts.filter(product => product.category.name
            .toLowerCase() === category.toLowerCase());
        setProducts(filterByCategories);
    }

    return (
        <>
            <Navbar />
            <main className="pt-10 bg-gradient-to-br from-green-200 via-gray-100 to-gray-300



 ">
            {/* <section className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-4 py-10">
  {/* Place your main content or sidebar here */}
{/* </section> */} */

                <div className="px-0  pb-10">
                    <div id="myCarousel" className="carousel slide h-[25vh] " data-bs-ride="carousel">

                        <div className="carousel-inner h-[25vh]">
                            <div className="carousel-item ">
                                <img src="1.jpg" className="d-block w-full h-[25vh] object-cover md:object-contain shadow-md" alt="Acessories" />
                            </div>

                            <div className="carousel-item ">
                                <img src="2.jpg" className="d-block w-full h-[25vh] object-cover md:object-contain shadow-md" alt="Clothing" />
                            </div>

                            <div className="carousel-item active ">
                                <img src="3.jpg" className="d-block w-full h-[25vh] object-cover md:object-contain shadow-md" alt="furniture" />
                            </div>
                            <div className="carousel-item ">
                                <img src="4.jpg" className="d-block w-full h-[25vh] object-cover md:object-contain shadow-md" alt="footwear" />
                            </div>
                        </div>


                        <button className="carousel-control-prev  ml-16 " type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visulaly-hidden"></span>
                        </button>
                        <button className="carousel-control-next mr-16  " type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visulaly-hidden"></span>
                        </button>
                    </div>

                </div>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {
                        categories?.length > 0 && categories.map(category => <div key={category.id} className="bg-green-400
                         font-semibold text-[1vw] rounded-full p-2.5 hover:cursor-pointer" onClick={() => onCategoryClick(category.name)}>{category.name}</div>)
                    }
                </div>
                <div className="flex flex-wrap gap-8 pb-1 shadow-md justify-center">
                    {
                        products?.length > 0 ? products.map(product => <ProductCard style={{ width: '6vw', height: '10vh' }} key={product.id} product={product} />) : <h2>No product found. Please try another category</h2>
                    }
                </div>

            <Footer></Footer>
            </main>
            

        </>
    )
}