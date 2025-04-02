import { CreditCard, Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";

const Footer = () => {


    return (
        <>
            <div className="pt-2 mx-0 drop-shadow-md" >
                <div className="bg-green-700 p-6 mx-1 drop-shadow-lg text-xs text-gray-300" >
                    <div className="grid grid-cols-1 gap-2 ">
                        <div className="px-5 py-4">
                            <form autoComplete="on">
                                <label className="font-bold">Subscribe to our newsletter and Get 10% off</label><br></br>
                                <input type="text" placeholder="Email" className=" w-50 mb-3 bg-green-600 border rounded-md"></input><br />
                                <input className="w-50 bg-white text-gray-600 rounded-md" type="submit" value="Subscribe"></input>
                            </form>
                        </div>
                        <div className="flex flex-wrap">
                            <ul className=" mb-4 no-underline">
                                <li className="font-bold">Useful Links</li>
                                <a href=" " target="_blank" rel="noopener noreferrer">
                                    <li className="text-gray-300">Privacy Policy</li>
                                </a>
                                <a href=" " target="_blank" rel="noopener noreferrer ">
                                    <li className="text-gray-300">Terms & Conditions</li>
                                </a>
                            </ul>
                            <div className="flex flex-wrap">
                            <ul className="mb-0">
                                <li className="font-bold">Social Media</li>
                                <a href="https://www.instagram.com/adarsh14118?igsh=djA5aWhiaG9md2lt" target="_blank" rel="noopener noreferrer">
                                    <li className="text-gray-300"><Instagram /> <Facebook /> </li>
                                </a>
                            </ul>
                            <ul className=" mb-4">
                            <li className="font-bold">Card accepted</li>
                                <li className="text-gray-300"><CreditCard /> </li>
                            </ul>
                            </div>
                            
                        </div>


                    </div>


                    <p className="flex flex-wrap text-xs text-center text-gray-400 shadow-black font-extralight mx-0">
                        Product descriptions, claims, and statements on this website have not been evaluated by an requlatory authority.
                        These prodcuts are not intended to diagnose, treat, cure or prevent any condition.
                        Please consult with a professional before making a purchase
                    </p>
                    <ul className="mt-3">
                                <li className="text-gray-300 text-pretty">Copyright 3rdcopy @2024</li>
                            </ul>
                </div>
            </div>
        </>
    )

}
export default Footer;