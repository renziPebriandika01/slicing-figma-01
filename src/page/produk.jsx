import React from "react";
import NikeAir from "../assets/nikeAir.png";
import Watch from "../assets/watch.png";
import Sweater from "../assets/sweater.png";
import Airpods from "../assets/airpods.png";
import Slider from "react-slick";

const Produk = React.forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-20 mb-20 ml-16 " ref={ref} id="produk">
      <p className="font-semibold text-xl sm:ml-28 ml-2">
        Popular Products From
        <br />
        All Brands
      </p>
      <div className="sm:hidden  block mt-10">
        <div className="">
        {/* mobile carousel */}

        <Slider {...settings} className="">
          <div>
            <img src={NikeAir} alt="Nike Air" />
          </div>
          <div>
            <img src={Watch} alt="Watch" />
          </div>
          <div>
            <img src={Sweater} alt="Sweater" />
          </div>
          <div>
            <img src={Airpods} alt="Airpods" />
          </div>
        </Slider>

        {/* mobile carousel */}
        </div>
      </div>
      <div className="sm:block hidden">
        <div className=" container flex flex-wrap items-center sm:flex-nowrap  gap-10 mt-10">
          <div className="border-e-2 border-b-2 shadow-lg px-5 py-3 ">
            <img src={NikeAir} alt="" className="" />
            <p className="">
              Nike Air Force
              <br />
              <span className="font-normal">Rp 2.999.999</span>
            </p>
          </div>
          <div className="border-e-2 border-b-2 shadow-lg px-5 py-3">
            <img src={Sweater} alt="" className="" />
            <p className="">
              White Sweater <br />
              <span className="font-normal">Rp 299.999</span>
            </p>
          </div>
          <div className="border-e-2 border-b-2 shadow-lg px-5 py-3">
            <img src={Watch} alt="" className="" />
            <p className="">
              Smartwatch <br />{" "}
              <span className="font-normal">Rp 1.399.999</span>
            </p>
          </div>
          <div className="border-e-2 border-b-2 shadow-lg px-5 py-3">
            <img src={Airpods} alt="" className="" />
            <p className="">
              Apple Airpods <br />
              <span className="font-normal">Rp 2.599.999</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Produk;
