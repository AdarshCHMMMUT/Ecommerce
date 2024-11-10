import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useLogin } from '../../context/login-context';
// import { type } from '@testing-library/user-event/dist/type';
export const Navbar = () => {
const navigate = useNavigate();
const [isAccountDropdownOpen, setisAccountDropdownOpen] = useState(false);
// const {token, loginDispatch} = useLogin
const onLoginClick = () => {
    console.log("onlogin clicked")
    navigate('/auth/login')
 
}
// if (token.access_token) {
  //  navigate('/auth/login')}
  // else{
  //   loginDispatch({
  //     type:'LOGOUT'
  //   })
   // } 
  //  {
  //   // token.access_token ? 'Logout' : 'Login'
  // }
    return (
         <header className="flex bg-green-500 py-4 px-8 text-slate-50">
              <div>
                <h1 onClick={() => navigate('/')} className='text-5xl'>Shop It</h1>

              </div>
              <nav className='ml-auto flex gap-2'>
              
                <span onClick={()=> navigate('/wishlist')}><  FavoriteIcon/></span>
                
                <ShoppingCartIcon onClick={()=> navigate('/cart')} ></ShoppingCartIcon>
                <div className="relative">
                <span onClick={()=> setisAccountDropdownOpen(!isAccountDropdownOpen)} >
                <AccountCircleIcon/>
                </span>
                {
                  isAccountDropdownOpen && <div className='absolute bg-green-400' >
                    
                    <button onClick={onLoginClick}>Login</button>
                  </div>
                }
                </div>

                
               
              </nav>
                
         </header>
      //    <img 
      //    src="image.jpg" 
      //    alt="Product Image" 
      //    onError={(e) => e.target.src = 'placeholder.jpg'} 
      //  />


    )
}
