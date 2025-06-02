 
import { Navbar } from "../../components/Navabar";
import { ProductCard } from "../../components/productCard";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";

export const Home = () => {
    const [allproducts, setallproducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const limit = 16;

    useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const [productsRes, categoryRes, allitems] = await Promise.all([
                axios.get(`https://thirdcopyback.vercel.app/api/user/items?page=${page}&limit=${limit}`),
                axios.get('https://thirdcopyback.vercel.app/api/user/category'),
                axios.get('https://thirdcopyback.vercel.app/api/user/items')

            ]);

            const items = productsRes.data.items;
            const total = productsRes.data.totalPages;
            const fetchedCategories = categoryRes.data.categories || [];
            const data = allitems.data.items;

            setProducts(items);
            setallproducts(data);
            setTotalPages(total);
            setCategories([...fetchedCategories, { id: '1a', name: 'All' }]);
        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, [page]);


    const onCategoryClick = (category) => {
        // console.log(allproducts);
        const filtered = category.toLowerCase() === 'all'
            ? allproducts
            : allproducts.filter(product => product.category.name.toLowerCase() === category.toLowerCase());
        setProducts(filtered);
    }

    return (

        loading ? <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        </div> : <>
            <Navbar />
            <main className="pt-10 bg-gradient-to-br from-green-200 via-gray-100 to-gray-300">
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
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    {categories?.length > 0 && categories.map(category => (
                        <div
                            key={category.id}
                            onClick={() => onCategoryClick(category.name)}
                            className="flex flex-col items-center w-[15vw] sm:w-[12vw] md:w-[8vw] lg:w-[6vw] p-2 rounded-xl bg-green-100 shadow hover:bg-green-200 transition-all cursor-pointer"
                        >
                            <img
                                src={category.image || "/default-image.jpg"}
                                alt={category.name}
                                className="w-[60%] aspect-square object-cover rounded-full mb-2"
                            />
                            <span className="text-center font-medium text-[3vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw]">
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>


                <div className="flex flex-wrap gap-8 pb-1 shadow-md justify-center">
                    {
                        products?.length > 0 ? products.map(product => <ProductCard style={{ width: '6vw', height: '10vh' }} key={product.id} product={product} />) : <h2>No product found. Please try another category</h2>
                    }
                    <div className="mt-6 flex justify-center items-center gap-4">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className={`px-4 py-2 rounded-md text-white font-semibold 
      ${page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
                        >
                            Previous
                        </button>

                        <span className="text-lg font-medium">
                            Page {page} of {totalPages}
                        </span>

                        <button
                            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                            className={`px-4 py-2 rounded-md text-white font-semibold 
      ${page === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
                        >
                            Next
                        </button>
                    </div>

                </div>

                <Footer></Footer>
            </main>


        </>
    )
}