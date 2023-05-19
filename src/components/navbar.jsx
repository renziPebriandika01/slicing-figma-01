import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faDollarSign, faSquareCheck, faShoppingBag, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBtnIcon = isMobileMenuOpen ? faTimes : faBars;

  return (
    <>
      {/* navbar */}
      <nav className="border-b-2 ml-0 sm:ml-12 sm:mr-20">
        <div className="max-w-6xl">
          <div className="flex justify-between">
            <div className="flex items-center">
              {/* logo */}
              <div className="flex space-x-4">
                <Link to="/" className="flex">
                  <img src={Logo} alt="" className="h-13 w-13 mr-3" />
                </Link>
              </div>

              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-4 ml-48 border-b-2 shadow-md">
                <Link to="/" className="py-4 px-3 text-xl font-normal">
                  Home
                </Link>
                <Link to="/produk" className="py-4 px-3 text-xl font-normal">
                  Produk
                </Link>
                <Link to="/categories" className="py-4 px-3 text-xl font-normal">
                  Categories
                </Link>
                <Link to="/brands" className="py-4 px-3 text-xl font-normal">
                  Brands
                </Link>
                <Link to="/categories" className="py-4 px-3 text-xl font-normal">
                  Pricing
                </Link>
              </div>
            </div>

            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-3">
              <button>
                <Link
                  to="/"
                  className="hover:bg-green-690 hover:border rounded-lg py-2 px-5 font-normal hover:text-white transition duration-500"
                >
                  Login
                </Link>
              </button>
              <button className="">
                <Link
                  to="/"
                  className="bg-green-690 hover:border text-white rounded-lg py-2 px-3 font-normal hover:text-white transition duration-500"
                >
                  Register
                </Link>
              </button>
            </div>

            {/* mobile button */}
            <div
              className="md:hidden flex items-center"
              onClick={toggleMobileMenu}
            >
              <button>
                <FontAwesomeIcon
                  icon={toggleBtnIcon}
                  className="w-5 h-5 mr-4"
                />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "absolute  bg-green-690 w-2/3 py-3 px-4 h-screen" : "hidden"
          }`}
        >
          <div className="space-y-2 mt-28">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
              <Link to="/produk" className="py-2 px-4 text-sm hover:text-white text-white">
                Produk
              </Link>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faSquareCheck} className="mr-2" />
              <Link
                to="/categories"
                className="py-2 px-4 text-sm hover:text-gray-300 text-white"
              >
                Categories
              </Link>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faShoePrints} transform="flip-horizontal" />
              <Link
                to="/brands"
                className="py-2 px-4 text-sm hover:text-green-700 text-white" 
              >
                Brands
              </Link>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              <Link
                to="/pricing"
                className="py-2 px-4 text-sm hover:text-blue-400 text-white"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="mt-4 px-4 mb-3">
            <button>
              <Link
                to="/"
                className="px-3 py-2 hover:text-white border bg-orange-600 rounded"
              >
                Login
              </Link>
            </button>
            <button>
              <Link
                to="/"
                className="px-3 py-2 ml-2 text-black font-normal hover:text-white border bg-orange-600 rounded"
              >
                Register
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
