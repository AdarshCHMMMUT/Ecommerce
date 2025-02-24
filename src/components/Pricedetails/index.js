import { useState } from "react";
import React from "react";
import { useCart } from "../../context/cart-context"
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
import StripeCheckout from "react-stripe-checkout"
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
 
export const PriceDetails = () => {
    const { cart } = useCart();
    const totalCartAmount = getTotalCartAmount(cart)
    const deliveryCharge = 49;
    
    const [product, setProduct]= useState({
        name: "React from F8",
        price: 10,
        productBy: "facebook"
     });
    //  const navigate = useNavigate();
     const onToken = (token) => {
        console.log('Payment Token:', token);
        fetch(`http://localhost:8282/payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token, amount: 1000000 }), // Amount in cents ($10,000)
        })
          .then((response) => {
            if (response.ok) {
              alert('Payment Successful!');
              // navigate("/");
              
            } else {
              alert('Payment Failed');
            }
            return response.json();

          })
          .catch((error) => {
            console.error('Error processing payment:', error);
            alert('An error occurred. Please try again.');
          });
      };
   const makePayment = token =>{
      const body = {
       token,
       product
      }
      const headers = {
       "Content-Type": "application/json"
      }
   
      return fetch(`http://localhost:8282/payment`,{
       method: "POST",
       headers,
       body: JSON.stringify(body)
      }).then(response =>{
       console.log("RESPONSE",response);
       const {status} = response;
       console.log("STATUS",status);
      })
      .catch(error => console.log(error));
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
        token = {makePayment}
        name = "Place order"
        amount={product.price*100}
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