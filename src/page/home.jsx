import heroImage from "../assets/Hero Image.png";
import Delivery from "../assets/IconDelivery.svg";
import iconHeroForYou from "../assets/IconHereForYou.svg";
import IconTrusted from "../assets/IconTusted.svg";
const Home = () => {
  return (
    <>
      <div className=" flex mt-20">
        <div className="container flex flex-wrap">
          <p className="text-1xl sm:text-7xl ml-3 font-semibold ">
            Best Place to Buy <br />
            <span className="text-green-690">Everything.</span>
          </p>
          <p className="ml-3 mt-10 sm:mt-10 text-xs sm:text-base">
            Best Place to Buy Everything. At Bachira, you can shop for all your
            favorite beauty brands, clothes,
            <br />
            household products and more at a single place.
          </p>
          <button className="mt-10 bg-green-690 rounded-lg py-1 px-2 ml-2 sm:ml-28 text-white transition duration-300 hover:bg-green-600 sm:h-[50px]">
            Shopping Now
          </button>
        </div>

        <div className=" container mx-auto">
          <img src={heroImage} alt="" />
        </div>
      </div>
      {/* elemn bawah honme */}
      <div className="mt-32">
        <p className="font-semibold sm:mt-20 mt-14 text-xl  sm:text-2xl text-center">
          Why Choose Ba<span className="text-green-690">chira</span>?
        </p>
        <div className="container flex justify-center gap-3 xl:space-x-24 mt-20 sm:ml-10 ml-0 sm:text-sm text-xs ">
          <div className="card flex flex-col justify-center items-center shadow-md">
            <div className=" py-2 px-10">
              <img src={Delivery} alt="" />
            </div>
            <div>
              <p className="mb-3 text-green-690 font-semibold">Delivery</p>
            </div>
            <div className="py-3 px-10">
              <p>
                Lorem ipsum dolor sit <br />
                amet consectetur.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-center items-center shadow-md">
            <div className="">
              <img src={IconTrusted} alt="" />
            </div>
            <div
              className=""
            >
              <p className="mb-3 text-green-690 font-semibold">
                Trusted Platform
              </p>
            </div>
            <div className="py-3 px-10">
              <p >
                Lorem ipsum dolor sit <br />
                amet consectetur.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-center items-center shadow-md">
            <div className="">
              <img src={iconHeroForYou} alt="" className="" />
            </div>
            <div className="">
              <p className="mb-3 text-green-690 font-semibold">Here For You</p>
            </div>
            <div className="py-3 px-10">
              <p>
                Lorem ipsum dolor sit <br />
                amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
