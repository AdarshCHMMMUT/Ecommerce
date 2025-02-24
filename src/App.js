
 import {Route,Routes} from "react-router-dom";
 import { Home } from "./pages/Homepage";
 import { Cart } from "./pages/Cart";
import { AuthLogin } from "./pages/AuthLogin";
import { Wishlist } from "./pages/wishlist";

function App() {
  return (
    <Routes>
      <Route path = "/"element = {<Home/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/auth/login" element = {<AuthLogin/>}/>
      <Route path = "/wishlist" element = {<Wishlist/>}/>
    </Routes>
  );
}

export default App;
