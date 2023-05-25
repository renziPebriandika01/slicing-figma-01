const footer = () => {
  return (
    <>
      <footer>
        <div className="mt-60 sm:mt-60 border-t-2 flex sm:gap-20 gap-3 ml-3 sm:text-xl text-xs">
          <div className="text1 ">
            <p className="text-xl">
              Ba<span className="text-green-690">chira</span>
            </p>
            <p className="mt-4 sm:mt-2  ">
              Bachira is an online store dealing with all product <br />
              Bachira provide cheap, high quality, products to <br /> customers
            </p>
          </div>
          <div className="text2 sm:mt-0 mt-11 ">
            <p className="font-semibold">For Beginner</p>
            <a href="">About</a>
            <br />
            <a href="">Career</a>
            <br />
            <a href="">Promotion</a>
            <br />
          </div>
          <div className="text3 sm:mt-0 mt-12 ">
            <p className="font-semibold">Overview</p>
            <a href="">Product</a>
            <br />
            <a href="">Categories</a>
            <br />
            <a href="">Pricing</a>
            <br />
          </div>
          <div className="text4 sm:mt-0 mt-11">
            <p className="font-semibold">Explore Us</p>
            <a href="">Our Career</a>
            <br />
            <a href="">Privacy </a>
            <br />
            <a href="">Term & Condition</a>
            <br />
          </div>
          <div className="text5 sm:mt-0 mt-11">
            <p className="font-semibold">Connect Us</p>
            <p>Support @RENZI</p>
            <p>082383246251</p>
            <p> Simpang Empat, Pasaman Barat</p>
          </div>
        </div>
          <div className="container mx-auto text-center sm:mt-10 text-gray-500 sm:text-sm text-xs mb-10 mt-5">
            &copy; 2023 Your Company. All rights reserved. Bachira by Renzi
          </div>
      </footer>
    </>
  );
};

export default footer;
