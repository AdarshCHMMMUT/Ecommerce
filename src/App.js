
 import {Route,Routes} from "react-router-dom";
 import { Home } from "./pages/Homepage";
 import { Cart } from "./pages/Cart";
import { AuthLogin } from "./pages/AuthLogin";
import { Wishlist } from "./pages/wishlist";
import { AuthSignup } from "./pages/AuthSignup";
import { Authforgot } from "./pages/authForgot";
import { Profile } from "./components/profile";
function App() {
  return (
    <Routes>
      <Route path = "/"element = {<Home/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/auth/login" element = {<AuthLogin/>}/>
      <Route path = "/auth/signup" element = {<AuthSignup/>}/>
      <Route path = "/auth/forgot-password" element = {<Authforgot/>}/>
      <Route path = "/wishlist" element = {<Wishlist/>}/>
      <Route path = "/profile" element = {<Profile/>}/>

      
    </Routes>
  );
}

export default App;
