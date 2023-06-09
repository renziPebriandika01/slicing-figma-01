import React from "react";
import belenciaga from "../assets/Balenciaga svg.svg";
import adiddas from "../assets/adidas svg.svg";
import gucci from "../assets/gucci svg.svg";
import bukalapak from "../assets/Bukalapak svg.svg";
import tokPed from "../assets/Tokopedia svg.svg";
const brands = React.forwardRef((props,ref) => {
return (
    <div className="mt-20"  ref={ref}>
        <p className="text-lg sm:text-3xl font-semibold text-center">
          We Collaborate With 250++ Leading Top <br /> E Commerce and Brands
        </p>
        <div className="brands flex flex-wrap justify-center gap-5 mt-10">
          <img src={tokPed} alt="tokped" />
          <img src={belenciaga} alt="ahhahaha" />
          <img src={adiddas} alt="adidas" />
          <img src={gucci} alt="gucci" />
          <img src={bukalapak} alt="bukalapak" />
        </div>
    </div>


)
});

export default brands
