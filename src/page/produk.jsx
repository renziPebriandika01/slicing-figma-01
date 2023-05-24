import React from "react";
import NikeAir from "../assets/nikeAir.png";
import Watch from "../assets/watch.png";
import Sweater from "../assets/sweater.png";
import Airpods from "../assets/airpods.png";
import { forwardRef } from "react";

const Produk =React.forwardRef((props,ref) => {
  return (
    <div className="mt-20 mb-20" ref={ref} id="produk">
      <p className="font-semibold text-xl sm:ml-28 ml-2">
        Popular Products From
        <br />
        All Brands
      </p>

      <div className="products flex flex-wrap sm:flex-nowrap ml-10 gap-10 mt-10">
        <div className="card">
          <img src={NikeAir} alt="" className="sm:min-w-fit w-24 h-auto" />
          <p className="mt-5 font-semibold ml-4">
            Nike Air Force
            <br />
            <span className="font-normal">Rp 2.999.999</span>
          </p>
        </div>
        <div className="card sm:ml-32 ml-0">
          <img src={Sweater} alt="" className="sm:min-w-fit w-24 h-auto" />
          <p className="mt-5 font-semibold ml-4">
            White Sweater <br />
            <span className="font-normal">Rp 299.999</span>
          </p>
        </div>
        <div className="card sm:ml-32 ml-0">
          <img src={Watch} alt="" className="sm:min-w-fit w-24 h-auto" />
          <p className="mt-5 font-semibold ml-3 sm:ml-4">
            Smartwatch <br /> <span className="font-normal">Rp 1.399.999</span>
          </p>
        </div>
        <div className="card sm:ml-36 ml-3 mr-14 sm:mr-0">
          <img src={Airpods} alt="" className="sm:min-w-fit w-24 h-auto" />
          <p className="mt-5 font-semibold ">
            Apple Airpods <br />
            <span className="font-normal">Rp 2.599.999</span>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Produk;
