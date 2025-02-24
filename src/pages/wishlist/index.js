import { Navbar } from "../../components/Navabar"
import { useWish } from "../../context/wish-context";
import { WishCard } from "../../components/HorizontalProductcard/wish";
import { useNavigate } from "react-router-dom";
import { WishProvider } from "../../context/wish-context";
export const Wishlist = () => {

    const { wish } = useWish();
    const Navigate = useNavigate();
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center pt-6  ">
                {
                    wish?.length>0?(
                        <>
                        <p className="text-3xl ">MY WIshes</p>
                        <div className="flex gap-8">
                          <WishProvider>

                            <div className="pt-4 flex flex-col gap-4">
                                {
                                    wish?.length > 0 ? wish.map(product => <WishCard key={product.id} product=
                                        {product} />) : <p> cart is empty , add products</p>
                                }
                            </div>
                          </WishProvider>
                            
                        </div>
                        </>
                    ) : <div>
                        <h2 className = "text-3xl">
                            No wishes right now! Make one.
                        </h2>
                        <p className="text-[rgb(20 83 45)] hover: cursor-pointer underline" onClick ={()=>Navigate('/')}>Click to add itmes to wishlist</p>
                    </div>
                }
               

            </main>

        </>
    )
}