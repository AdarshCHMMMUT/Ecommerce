import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../api/getAllProducts';
import Searchbar from '../searchbar';
import { useLogin } from '../../context/login-context';
// import { type } from '@testing-library/user-event/dist/type';
export const Navbar = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  
  const [isAccountDropdownOpen, setisAccountDropdownOpen] = useState(false);
  const { token, loginDispatch } = useLogin;
  // console.log("here is token");
  // console.log(token);
  
  const onLoginClick = () => {
    console.log("onlogin clicked")
    navigate('/auth/login')

  }

  // if (token.access_token) {
  //   navigate('/auth/login')
  // }
  // else {
  //   loginDispatch({
  //     type: 'LOGOUT'
  //   })
  // }
  
  useEffect(() => {
    (async () => {
      const product = await getAllProducts();
      setProducts(product);
    })()


  }, [])
  return (
    <header className="flex bg-green-500 justify-between  ">
      <div onClick={() => navigate('/')} >
        <img src="thirdcopy.png" alt="logo" className="h-12 md:h-20 lg:h-38 object-contain pl-20 pr-0"></img>

      </div>
      <div>
        <h1 onClick={() => navigate('/')} className=' font-serif text-white text-5xl py-4 pl-5 pr-10 ' style={{ fontFamily: '"Viner Hand ITC", cursive', color: '#6d6f5f' }}>Third Copy</h1>
      </div>
      <div className='flex justify-center items-center'>
        <Searchbar />
      </div>
      <nav className='ml-auto flex gap-2 py-4 pr-8 text-slate-50'>
        <span onClick={() => navigate('/wishlist')}> <FavoriteIcon style={{ width: '4vw', height: '6vh' }}></FavoriteIcon></span>

        <ShoppingCartIcon style={{ width: '4vw', height: '6vh' }} onClick={() => navigate('/cart')} ></ShoppingCartIcon>
        <div className="relative">
          <span onClick={() => setisAccountDropdownOpen(!isAccountDropdownOpen)} >
            <AccountCircleIcon style={{ width: '4vw', height: '6vh' }} ></AccountCircleIcon>
          </span>
          {
            isAccountDropdownOpen && <div className='absolute bg-green-400' >

              <button onClick={onLoginClick}>
                Login
              {/* {token.access_token ? 'Logout' : 'Login'} */}
                </button>
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
