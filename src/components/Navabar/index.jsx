import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Searchbar from '../searchbar';
// import { useLogin } from '../../context/login-context';
// import { type } from '@testingz-library/user-event/dist/type';
export const Navbar = () => {
  const navigate = useNavigate();


  const [isAccountDropdownOpen, setisAccountDropdownOpen] = useState(false);
  // const { token, loginDispatch } = useLogin;
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


  return (
    <header className=" bg-green-500 gap-4">
      <div className='flex flex-col'>
        <div className='flex gap-4 justify-between items-center'>
          <div className='pt-3' onClick={() => navigate('/')} >
            <img src="thirdcopy.png" alt="logo" className="h-[8vh] md:[h-[8vh]] object-contain pl-0 pr-0"></img>
          </div>
          <div className=''>
            <h1 onClick={() => navigate('/')} className='flex items-baseline font-serif text-white text-[25px]  pt-4 md:pl-40 pr-0 ' style={{ fontFamily: '"Viner Hand ITC", cursive', color: '#6d6f5f' }}>
              Third Copy</h1>

          </div>
          <nav className='flex gap-1 sm:gap-3 md:gap-5 lg:gap-7 text-slate-50'>
            <span onClick={() => navigate('/wishlist')}> <FavoriteIcon style={{ width: '6vw', height: '10vh' }}></FavoriteIcon></span>
            <ShoppingCartIcon style={{ width: '6vw', height: '10vh' }} onClick={() => navigate('/cart')} ></ShoppingCartIcon>
            <div className="relative">
              <span onClick={() => setisAccountDropdownOpen(!isAccountDropdownOpen)} >
                <AccountCircleIcon style={{ width: '6vw', height: '10vh' }} ></AccountCircleIcon>
              </span>
              {
                isAccountDropdownOpen && <div className='absolute bg-green-400' >
                  <button onClick={onLoginClick}>
                    Login
                    {/* {token.access_token ? 'Logout' : 'Login'} */}
                  </button></div>
              }
            </div>
          </nav>
        </div>
        <div className='flex justify-center  pb-2'>
          <div className='w-40'>
          <Searchbar />
          </div>
        </div>
      </div>
    </header>
  )
}
