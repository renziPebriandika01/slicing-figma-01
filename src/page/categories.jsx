import Shoes from "../assets/shoes.png";
import Skincar from "../assets/skincare.png";
import electronic from "../assets/electronics.png";
import fashion from "../assets/fashion.png";
import React from "react";
import Slider from "react-slick";
const Categories = React.forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" container mb-20 ml-0 sm:ml-16 " ref={ref}>
        <p className="font-semibold text-base sm:text-3xl mt-10 sm:mt-14 sm:ml-20 ml-3">
          Browse Categories of <br />
          The Store
        </p>
        <div className="mt-10 ">
          <Slider {...settings} className="container w-auto">
            <div className="">
              <div className="space-y-6 pl-4 mr-12 sm:pl-96">
                <img src={fashion} alt="Nike Air" />
                <img src={Skincar} alt="Sweater" />
              </div>
            </div>
            <div className="pl-9 sm:pl-96">
              <img src={Shoes} alt="Watch" />
            </div>
            <div className=" pl-4  sm:pl-96">
              <img src={electronic} alt="Airpods" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
});

export default Categories;
