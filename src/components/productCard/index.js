import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart-context';
import { findProductInCart } from '../../utils/findProductincart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { findProductInWish } from '../../utils/findProiductinwish';
import { useWish } from '../../context/wish-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const ProductCard = ({ product }) => {

    const { cart, cartDispatch } = useCart();
    const navigate = useNavigate();
    const isProductInCart = findProductInCart(cart, product.id)
    const onCartClick = (product) => {
        !isProductInCart ?
            cartDispatch({
                type: 'ADD_TO_CART',
                payload: { product }
            }) : navigate('/Cart')
    }


    const { wish, wishDispatch } = useWish()
    const isProductInWish = findProductInWish(wish, product.id)
    const onWishlistclick = (product) => {
        !isProductInWish ?
            wishDispatch({
                type: 'ADD_TO_WISHLIST',
                payload: { product }
            }) : navigate('/wishlist')
    }
    const toggleReadMore = (e) => {
        const button = e.target;
        const descriptionText = button.previousElementSibling;

        if (button.textContent === "Read More") {
            descriptionText.classList.remove("line-clamp-2", "overflow-hidden");
            button.textContent = "Read Less";
        } else {
            descriptionText.classList.add("line-clamp-2", "overflow-hidden");
            button.textContent = "Read More";
        }
    }
    return (
        <div className=" card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                {/* <img className="card-image" src={product?.images?.[1] || 'default-image.jpg'} alt="product" /> */}




                <div className="">
                    <div id="myCarousel1" className="carousel slide " data-bs-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active ">
                                <img src={product?.images?.[0] || 'default-image.jpg'} className="d-block w-full h-96  object-cover md:object-contain" alt="Acessories" />
                            </div>

                            <div className="carousel-item ">
                                <img src={product?.images?.[1] || 'default-image.jpg'} className="d-block w-full h-96 object-cover md:object-contain" alt="Clothing" />
                            </div>

                            <div className="carousel-item  ">
                                <img src={product?.images?.[2] || 'default-image.jpg'} className="d-block w-full h-96 object-cover md:object-contain" alt="furniture" />
                            </div>

                        </div>


                        <button className="carousel-control-prev  " type="button" data-bs-target="#myCarousel1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visulaly-hidden"></span>
                        </button>
                        <button className="carousel-control-next    " type="button" data-bs-target="#myCarousel1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visulaly-hidden"></span>
                        </button>
                    </div>

                </div>







            </div>
            <div className="card-details">
                <div className="card-title">{product.title}</div>
                <div className="card-description">
                    <p className="card-price">
                        Rs.{((product.price) * 10) - 1}
                        <span className="price-strike-through">Rs.{((product.price) * 13) - 1}</span>
                        <span className="discount">(30% OFF)</span>
                    </p>
                    <p className="description-text line-clamp-2 overflow-hidden">{product.description}</p>
                    <button
                        className="read-more-btn text-grey transition-all"
                        onClick={toggleReadMore}> Read More</button>
                </div>
                <div className="cta-btn">
                    <button onClick={() => onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">

                        {
                            isProductInCart ? <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon> : <ShoppingCartIcon>  </ShoppingCartIcon>
                        }

                        {
                            isProductInCart ? 'Go to cart' : 'Add To Cart'
                        }
                    </button>
                </div>
                <div className="cta-btn">
                    <button onClick={() => onWishlistclick(product)} className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
                        <FavoriteIcon></FavoriteIcon>
                        {

                            !isProductInWish ? 'Add To WishList' : 'Go to wishlist'
                        }
                    </button>
                </div>
            </div>
        </div>


    )
}