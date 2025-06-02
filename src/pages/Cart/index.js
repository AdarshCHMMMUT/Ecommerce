import { Navbar } from "../../components/Navabar"
import { useCart } from "../../context/cart-context"
import { HorizontalProductCard } from "../../components/HorizontalProductcard"
import { PriceDetails } from "../../components/Pricedetails";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const { cart } = useCart();
    console.log(cart);
    const Navigate = useNavigate();
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center pt-6  ">
                {
                    cart?.length>0?(
                        <>
                        <p className="text-3xl ">MY Cart</p>
                        <div className="flex gap-8">
                            <div className="pt-4 flex flex-col gap-4">
                                {
                                    cart?.length > 0 ? cart.map(product => <HorizontalProductCard key={product.id} product=
                                        {product} />) : <p> cart is empty , add products</p>
                                }
                            </div>
                            <div>
                                <PriceDetails />
                            </div>
                        </div>
                        </>
                    ) : <div>
                        <h2 className = "text-3xl">
                            Cart Empty
                        </h2>
                        <p className="text-[rgb(20 83 45)] hover: cursor-pointer underline" onClick ={()=>Navigate('/')}>Click to add itmes to cart</p>
                    </div>
                }
               

            </main>

        </>
    )
}