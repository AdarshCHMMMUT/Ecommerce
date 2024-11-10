import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart-context';
import { findProductInCart } from '../../utils/findProductincart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export const ProductCard = ({ product }) => {
    
    const { cart,cartDispatch } = useCart();
    const navigate = useNavigate();
    const isProductInCart = findProductInCart(cart, product.id)
    const onCartClick = (product) =>{
        !isProductInCart ?
          cartDispatch({
            type: 'ADD_TO_CART',
            payload: {product}
          }) :navigate('/Cart')
    }
    return (
        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src={product?.images?.[0] || 'default-image.jpg'} alt="product" />
                

            </div>
            <div className="card-details">
                <div className="card-title">{product.title}</div>
                <div className="card-description">
                    <p className="card-price">
                        Rs.{product.price}
                        <span className="price-strike-through">Rs. 2499</span>
                        <span className="discount">(30% OFF)</span>
                    </p>
                </div>
                <div className="cta-btn">
                    <button onClick ={ ()=> onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
                    
                        {
                            isProductInCart ?<ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>:<ShoppingCartIcon>  </ShoppingCartIcon>
                        }
 
                        {
                            isProductInCart ? 'Go to cart': 'Add To Cart'
                        }
                    </button>
                </div>
                <div className="cta-btn">
                    <button onClick ={ ()=> onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
                    <FavoriteIcon></FavoriteIcon>
                        Add To WishList
                    </button>
                </div>
            </div>
        </div>

        
    )
}