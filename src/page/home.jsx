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
        <button className="mt-10 bg-green-690 rounded-lg py-1 px-2 ml-2 sm:ml-28 text-white transition duration-300 hover:bg-green-600">
          Shopping Now
        </button>
        </div>
        
        <div className=" container mx-auto">
          <img src={heroImage} alt="" className="" />
        </div>
      </div>

      <div className="mt-32">
        <p className="font-semibold sm:mt-20 mt-14 text-xl  sm:text-2xl text-center">
          Why Choose Ba<span className="text-green-690">chira</span>?
        </p>
        <div className="icons flex sm:gap-44 gap-8 mt-10 justify-center sm:ml-0 ml-44 sm:mr-4 mr-0 w-16 sm:w-auto">
          <img src={Delivery} alt="" />
          <img src={IconTrusted} alt="" />
          <img src={iconHeroForYou} alt="" className="ml-4" />
        </div>
        <div className="label flex sm:gap-40 gap-8 ml-8 sm:ml-auto justify-center mt-7 font-semibold text-base">
          <p className="ml-12">Delivery</p>
          <p className="">Trusted Platform</p>
          <p className="mr-9">Here For You</p>
        </div>
        <div className="flex mt-5 sm:text-lg text-xs justify-center sm:gap-x-20 gap-8 ml-10 sm:ml-12">
          <p>
            Lorem ipsum dolor sit <br />
            amet consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit <br />
            amet consectetur.
          </p>
          <p className="">
            Lorem ipsum dolor sit <br />
            amet consectetur.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
