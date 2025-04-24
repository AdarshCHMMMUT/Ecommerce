import { CreditCard, Instagram, Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="pt-4 bg-[#d6d6d6] text-gray-800 drop-shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="mb-8">
          <form autoComplete="on" className="space-y-2">
            <label className="font-semibold text-base text-green-600">Subscribe & Get 10% Off</label><br />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-64 p-2 bg-white border border-gray-400 rounded-md text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-500 outline-none"
            /><br />
            <input
              type="submit"
              value="Subscribe"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md cursor-pointer transition"
            />
          </form>
        </div>
        <div className="flex flex-wrap justify-between items-start gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-green-600 mb-2">Useful Links</h3>
            <ul className="space-y-1">
              <li><a href=" " target="_blank" rel="noopener noreferrer" className="hover:text-black">Privacy Policy</a></li>
              <li><a href=" " target="_blank" rel="noopener noreferrer" className="hover:text-black">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-600 mb-2">Social Media</h3>
            <div className="flex gap-3 text-xl">
              <a href="https://www.instagram.com/adarsh14118?igsh=djA5aWhiaG9md2lt" target="_blank" rel="noopener noreferrer">
                <Instagram className="hover:text-green-600" />
              </a>
              <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="hover:text-green-600" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-green-600 mb-2">Cards Accepted</h3>
            <CreditCard className="text-xl text-gray-700" />
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-600 text-center leading-relaxed">
          Product descriptions and claims on this website have not been evaluated by any regulatory authority. 
          These products are not intended to diagnose, treat, cure or prevent any condition. 
          Please consult a professional before making a purchase.
        </p>
        <p className="mt-4 text-center text-gray-600 text-xs">
          © 3rdcopy 2024. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
