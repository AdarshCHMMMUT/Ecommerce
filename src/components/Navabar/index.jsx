import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Searchbar from '../searchbar';
import { HoverSidebar } from '../hoversidebar';

export const Navbar = () => {

  const navigate = useNavigate();
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-200 via-gray-200 to-green-100 shadow-lg">
      <div className='flex flex-col max-w-7xl mx-auto'>
        <div className='flex justify-between items-center p-4'>
          <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}>
            <img src="thirdcopy.png" alt="logo" className="h-12 object-contain" />
            <h1 className='text-3xl font-bold' style={{ fontFamily: '"Viner Hand ITC", cursive', color: '#4caf50' }}>
              Third Copy
            </h1>
          </div>
          <nav className='flex items-center gap-6 text-gray-700'>
            <div className="relative cursor-pointer">
              <span onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}>
                <AccountCircleIcon style={{ width: '30px', height: '30px', color: '#424242' }} />
              </span>
              {isAccountDropdownOpen && <HoverSidebar />}
            </div>
            <span className='cursor-pointer' onClick={() => navigate('/wishlist')}>
              <FavoriteIcon style={{ width: '28px', height: '28px', color: '#424242' }} />
            </span>
            <span className='cursor-pointer' onClick={() => navigate('/cart')}>
              <ShoppingCartIcon style={{ width: '28px', height: '28px', color: '#424242' }} />
            </span>
          </nav>
        </div>
        <div className='flex justify-center pb-4'>
        <div className='flex-grow max-w-lg'>
  <Searchbar />
</div>

        </div>
      </div>
    </header>
  )
}
