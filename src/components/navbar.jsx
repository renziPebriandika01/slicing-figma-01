/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faDollarSign,
  faSquareCheck,
  faShoppingBag,
   faPoo,
} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/no-extraneous-dependencies
import Logo from "../assets/Logo.svg";
import Produk from "../page/produk";
import Brands from "../page/brands";
import Categories from "../page/categories";
import Footer from "./footer";
import Home from "../page/home";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBtnIcon = isMobileMenuOpen ? faTimes : faBars;
  const refProduk = useRef(null);
  const refBrand = useRef(null);
  const refCategori = useRef(null);

  const gotoProduk = (refProduk) => {
    window.scrollTo({
      top: refProduk.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const gotoBrand = (refBrand) => {
    window.scrollTo({
      top: refBrand.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const gotoCategori = (refCategori) => {
    window.scrollTo({
      top: refCategori.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const pricing = ()=>{
    return alert ("halaman PRICING belum di bikin jirrr, yg mencet pasti belum glory wkwkw:(")
  }
  return (
    <>
      <nav className="sm:border-b-2 border-collapse top-0 w-full mb-20 sm:static fixed ">
        <div className="max-w-6xl px-0 sm:px-10">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex space-x-4">
                <a href="/" className="flex">
                  <img src={Logo} alt="" className="h-13 w-13 mr-3" />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-4 ml-48 border-b-2 shadow-md">
                <a href="/" className="py-4 px-3 text-xl font-normal">
                  Home
                </a>
                <div onClick={() => gotoProduk(refProduk.current)}>
                  <a href="#" className="py-4 px-3 text-xl font-normal">
                    Produk
                  </a>
                </div>
                <div  onClick={() => gotoCategori(refCategori.current)}>
                  <a href="#" className="py-4 px-3 text-xl font-normal">
                    Categories
                  </a>
                </div>

                <div onClick={() => gotoBrand(refBrand.current)}>
                  <a href="#" className="py-4 px-3 text-xl font-normal">
                    Brands
                  </a>
                </div>

                <a className="py-4 px-3 text-xl font-normal" onClick={()=>pricing()}>
                  Pricing
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <a
                href="#"
                className="hover:bg-green-690 hover:border rounded-lg py-2 px-5 font-normal hover:text-white transition duration-500"
              >
                Login
              </a>
              <button className="">
                <a
                  href=""
                  className="bg-green-690 hover:border text-white rounded-lg py-2 px-3 font-normal hover:text-white transition duration-500"
                >
                  Register
                </a>
              </button>
            </div>

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

        <div
          className={`md:hidden ${
            isMobileMenuOpen
              ? "block bg-green-690 w-2/3 py-3 px-4 h-full sm:rounded-none rounded-lg"
              : "hidden"
          }`}
        >
          <div className="space-y-2 ">
            <div className="flex items-center" onClick={() => gotoProduk(refProduk.current)}>
              <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
              <a 
                className="py-2 px-4 text-sm hover:text-orange-500 text-white"
              >
                Produk
              </a>
            </div>
            <div className="flex items-center"  onClick={() => gotoCategori(refCategori.current)}>
              <FontAwesomeIcon icon={faSquareCheck} className="mr-2" />
              <a
                className="py-2 px-4 text-sm hover:text-gray-300 text-white"
              >
                Categories
              </a>
            </div>
            <div className="flex items-center "  onClick={() => gotoBrand(refBrand.current)}>
              <FontAwesomeIcon
                icon={faPoo}
                transform="flip-horizontal"
              />
              <a
                className="py-2 px-4 text-sm hover:text-green-700 text-white"
              >
                Brands
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              <a
                onClick={()=>pricing()}
                className="py-2 px-4 text-sm hover:text-blue-400 text-white"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="mt-4 px-4 mb-3">
            <button>
              <a
                href="/"
                className="px-3 py-2 hover:text-white border bg-orange-600 rounded"
              >
                Login
              </a>
            </button>
            <button>
              <a
                href="/"
                className="px-3 py-2 ml-2 text-black font-normal hover:text-white border bg-orange-600 rounded"
              >
                Register
              </a>
            </button>
          </div>
        </div>
      </nav>
      <Home />
      <Brands ref={refBrand} />
      <Categories ref= {refCategori}/>
      <Produk ref={refProduk} />
      <Footer />
    </>
  );
}

export default Navbar;
