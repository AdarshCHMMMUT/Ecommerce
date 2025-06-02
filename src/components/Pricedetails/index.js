import { useCart } from "../../context/cart-context"
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
import StripeCheckout from "react-stripe-checkout"
import { useAuth } from "../../context/authcontext";
import {toast} from 'react-toastify';
export const PriceDetails = () => {
    const { cart } = useCart();
    const totalCartAmount = getTotalCartAmount(cart)
    const deliveryCharge = 49;
    const product = {name: cart[0].title,price: cart[0].price,  quantity: cart.length}
    const {user} = useAuth();
    console.log("HELLO");
    console.log({user});
    const onToken = (token) => {
        fetch(`https://thirdcopyback.vercel.app/api/user/payment`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify({ token, amount: 1000000 }),
        }).then((response) => 
          {
            if (response.ok) {toast.success('Payment Successful!');}
            else {toast.warn('Payment Failed');}
            return response.json();
          }).catch((error) => 
            {
            console.error('Error processing payment:', error);
            toast.error('An error occurred. Please try again.');
            });};

  const makePayment = async (token, product) => {
  try {
 if (!product) {
  throw new Error('Invalid product data: product is missing');
}
 

    if (!token || !token.id || !token.email || !token.card?.name || !token.card?.address_country) {
      throw new Error('Invalid token data: id, email, card name, or country missing');
    }

    const body = { token, product, userId: '67f26351a47633cecd6197e7' }; 
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch('https://thirdcopyback.vercel.app/api/user/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    console.log('RESPONSE', response);
    const data = await response.json();
    console.log('DATA', data);

    if (!response.ok) {
      throw new Error(data.error || `Payment failed with status: ${response.status}`);
    }

    if (response.status === 200) {
      console.log('Payment successful:', data.message);
      window.location.href = '/';
    }

    return data;
  } catch (error) {
    console.error('Payment error:', error.message);
    toast.error(`Payment failed: ${error.message}`);
    throw error;
  }
};
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
            <StripeCheckout
        stripeKey = "pk_test_51QJZtIDugOeILmRZuaFPEcgZA89xl08itmCkeRWr7SpdIlLsAmqSjstI9P0fI4tl2AfH5zcu572v2XCmFx6gublB00RtsdALda" 
        token={(token) => makePayment(token, product)} 
        name = "Place order"
        amount={Number(product.price*100)}
        shippingAddress
        billingAddress = {true}
        zipCode = {true}
        token2 = {onToken}
        allowRememberMe
        >
          <button className="button hori-btn btn-primary btn-icon d- flex align-center justify-center gap cursor btn-margin">
          Place Order</button>
        </StripeCheckout>
            </div> 
        </div>
    )



}