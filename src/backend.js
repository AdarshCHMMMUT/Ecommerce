const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51QJZtIDugOeILmRZ9vvBZ8CG4VrTwXpv9Qs5OsMasOY2uGIbg9AzQnvIqw8Er68xRrgJtNPawwHN0Oom6q1uRChs008YbqiblE");
const { v4: uuidv4 } = require('uuid');
// import { v4 as uuidv4 } from 'uuid';


const app = express();

//middleware
app.use(express.json());
app.use(cors());


//routes
app.get("/",(req,res)=>{
    res.send("IT works at learcodeonline");
})

app.post("/payment",(req,res) => {

    const {product, token} = req.body;
    console.log("PRODUCT",product);
    console.log("PRICE", product.price);
    const idempontencyKey = uuidv4();

    return stripe.customers.create({
        email:token.email,
        source: token.id
    }).then(customer =>{
        stripe.charges.create({
            amount: product.price * 100,
            currency : 'usd',
            customer: customer.id,
            receipt_email:token.email,
            descripttion:`purchase of product.name`,
            shipping:{
                name:token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        },{idempontencyKey})
    })
    .then(result =>res.status(200).json(result))
    .catch(err => console.log(err))
})
//listen

app.listen(8282,()=>console.log("listening at port 8282"));