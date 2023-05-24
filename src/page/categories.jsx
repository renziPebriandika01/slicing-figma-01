import Shoes from "../assets/shoes.png";
import Skincar from "../assets/skincare.png";
import electronic from "../assets/electronics.png";
import fashion from "../assets/fashion.png";
import React from "react";

const Categories =React.forwardRef ((props,ref) => {
  return (
    <>
    <div className="mb-20" ref={ref}>
       <p className="font-semibold text-base sm:text-3xl mt-10 sm:mt-14 sm:ml-20 ml-3">
          Browse Categories of <br />
          The Store
        </p>
        <div className="flex sm:ml-10 ml-7 justify-center">
          <div className="categories mt-10 flex flex-col">
            <div className="flex-none">
              <img src={fashion} alt="" className="sm:w-max w-24 sm:h-52 h-14" />
            </div>
            <div className="flex-none">
              <img src={Skincar} alt="" className="sm:w-max w-24 sm:h-52 h-12 sm:mt-9 mt-5" />
            </div>
          </div>
          <img src={Shoes} alt="" className="sm:w-80 w-20 ml-4 mt-9 mr-2 h-32 sm:h-auto" />
          <img src={electronic} alt="" className="sm:w-80 w-20 ml-4 mt-9 h-32 mr-2 sm:h-auto" />
        </div>
    </div>

    </>

  )
  });

export default Categories
