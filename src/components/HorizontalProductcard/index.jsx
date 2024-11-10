import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from '../../context/cart-context';
export const HorizontalProductCard = ({product}) => {
     const { cartDispatch } = useCart();
     const onRemoveClick = (product) => {
          cartDispatch({
               type: 'REMOVE_FROM_CART',
               payload: { id: product.id }
          })
     }
     return (
          <>
               <div className="card-horizontal d-flex shadow">
                    <div className="card-hori-image-container relative">
                    <img
                              className="card-image"
                              src={product?.images?.[0] || 'default-image.jpg'}
                              alt="shoes"
                         />
                    </div>
                    <div className="card-details d-flex direction-column">
                         <div className="card-title">{product.title} </div>
                         <div className="card-description">
                              <p className="card-des">Men Sneakers</p>
                              <p className="card-price">Rs. {product.price}<span className="price-strike- through padding-all-8">Rs. 2499</span>

                              </p>
                         </div>
                         <div className="quantity-container d-flex gap">
                              <p className="q-title">Quantity: </p>
                              <div className="count-container d-flex align-center gap">
                                   <button className="count">-</button>
                                   <span className="count-value">1</span>
                                   <button className="count">+</button>
                              </div>
                         </div>
                         <div className="cta-btn d-flex gap">
                              <div className="cta-btn">
                                   <button onClick={() => onRemoveClick(product)} className="button hori-btn btn-primary btn-icon d- flex align-center justify-center gap cursor btn-margin">
                                        <ShoppingCartIcon /> Remove from cart</button>
                              </div>
                              <div className="cta-btn">
                                   <button className="button hori-btn btn-primary btn-icon d- flex align-center justify-center gap cursor btn-margin">
                                        <FavoriteIcon /> Move to wishList</button>
                              </div>

                         </div>
                    </div>
               </div>
          </>
     )
}  