import { CreditCard, Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
 
const Footer = () => {


    return (
        <>
            <div className="pt-2 mx-3 drop-shadow-md" >
                <div className="bg-green-700 p-6 mx-6 drop-shadow-lg text-white" >
                    <div className="grid grid-cols-2 my-20">
                        <div className="">
                            <ul className=" mb-4">
                                <li className="font-bold">Useful Links</li>
                                <a href=" " target="_blank" rel="noopener noreferrer">
                                <li className="text-gray-300">Privacy Policy</li>
                                </a>
                                <a href=" " target="_blank" rel="noopener noreferrer ">
                                <li className="text-gray-300">Terms & Conditions</li>
                                </a>
                            </ul>
                            <ul className=" mb-4">
                                <li className="font-bold">Social Media</li>
                                <a href="https://www.instagram.com/adarsh14118?igsh=djA5aWhiaG9md2lt" target="_blank" rel="noopener noreferrer">
                                <li className="text-gray-300"><Instagram /> <Facebook /> </li>
                                </a>
                            </ul>
                            <ul className=" mb-1">
                                <li className="font-bold">Copyright</li>
                                <li className="text-gray-300">copyright 3copy @2024 </li>
                            </ul>
                            <ul className=" mb-4">
                                <li className="text-gray-300"><CreditCard /> </li>
                            </ul>
                        </div>
                        <div className="">
                            <form autoComplete="on">
                                <label className="font-bold">Subscribe to our newsletter and Get 10% off</label><br></br>
                                <input type="text" placeholder="Email" className=" w-50 mb-3 bg-green-600 border rounded-md"></input><br />
                                <input className="w-50 bg-white text-gray-600 rounded-md" type="submit" value="Subscribe"></input>
                            </form>
                        </div>

                    </div>


                    <p className="font-thin text-sm mx-52">
                        Product descriptions, claims, and statements on this website have not been evaluated by an requlatory authority.
                        These prodcuts are not intended to diagnose, treat, cure or prevent any condition.
                         Please consult with a professional before making a purchase
                        </p>
                </div>
            </div>
        </>
    )

}
export default Footer;