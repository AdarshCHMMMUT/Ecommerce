import { useCart } from "../../context/cart-context"
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
export const PriceDetails = () => {
    const { cart } = useCart();
    const totalCartAmount = getTotalCartAmount(cart)
    const deliveryCharge = 49;
    return (
        <div className="w-[300px] bg-[#fafafa] p-4">
            <p className="text-2xl border-b p-2">Pricedetails</p>
            <div className="flex flex-col gap-5 border-b p-2"> 
                <div>
                    <p>
                        Price{cart.length}items
                    </p>
                    <p className="ml-auto">Rs.{totalCartAmount}</p>
                </div>
                <div className="flex">
                    <p>
                        Delivery charge
                    </p>
                    <p className="ml-auto">{deliveryCharge}</p>
                </div>

            </div>
            <div className="flex">
                <p>
                    Total Amount
                </p>
                <p>{totalCartAmount + deliveryCharge}</p>
            </div>
            <div>
            <button className="button hori-btn btn-primary btn-icon d- flex align-center justify-center gap cursor btn-margin">Place Order</button>
            </div>
        </div>
    )

}