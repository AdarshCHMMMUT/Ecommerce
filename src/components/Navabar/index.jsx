import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {

  const navigate = useNavigate();
    return (
         <header className="flex bg-green-500 py-4 px-8 text-slate-50">
              <div>
                <h1 onClick={() => navigate('/')} className='text-5xl'>Shop It</h1>

              </div>
              <nav className='ml-auto flex gap-2'>
              
                <span onClick={()=> navigate('/wishlist')}><  FavoriteIcon/></span>
                
                <ShoppingCartIcon onClick={()=> navigate('/cart')} ></ShoppingCartIcon>
                
                 <AccountCircleIcon/>
                
               
              </nav>
                
         </header>
      //    <img 
      //    src="image.jpg" 
      //    alt="Product Image" 
      //    onError={(e) => e.target.src = 'placeholder.jpg'} 
      //  />


    )
}
