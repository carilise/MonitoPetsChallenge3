
import { Link } from "react-router-dom";
import { MdOutlinePlayCircle } from "react-icons/md";

import HeroDogsImage from "../../assets/img/HeroDogsImage.png";


const HeroDogsBanner = () => {
  return (
    <section className="mt-8 max-w-[1500px] mx-auto px-8 max-h-[378px] flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-between bg-gradient-to-br bg-secondary  overflow-hidden rounded-[20px] relative md:rounded-[20px] ">
        {/* Image lg*/}
        <div className="hidden md:flex w-full md:w-full h-full justify-center items-end  relative overflow-hidden">
          <img
            src={HeroDogsImage}
            alt="dogs"
            className="object-fit rounded-xl w-[513px] h-[342px] transition-opacity duration-1000 ease-in-out relative z-20"
            style={{ borderRadius: "11.79px" }}
          />
        </div>

        {/* Texte */}
        <div className="text-secondary-80 relative h-full w-full flex justify-end">
          <div className="h-full w-full bg-primary-80 absolute z-10 rotate-[45.23deg] rounded-bl-[99px] top-[50px] -left-[150px] hidden md:flex" />
          <div className="h-full w-[100%] xl:w-[80%] md:bg-primary-80 absolute ml-[500px] z-20 hidden md:flex" />

          <div className="relative z-20 xl:w-[80%] xl:pr-2">
            <div className="w-full justify-end py-2 px-10 md:text-white">
              <h1 className="w-full  text-start md:text-end text-[32px] lg:text-[52px] font-[800]  leading-[60px] md:leading-[68px]">
                One More Friend
              </h1>
              <span className=" flex-auto relative mb-4  pr-[20px] flex justify-end">
                <span className=" text-[24px] lg:text-[36px] font-[700] lg:font-[700] ">
                  Thousands More Fun!
                </span>
                <div
                  className="md:hidden absolute bg-primary pointer-events-none z-10 -rotate-[30.59deg] bottom-0 right-0"
                  style={{
                    width: "12.44px",
                    height: "12.44px",
                    opacity: 1,
                    // top: "30px",
                    // top: "-50px",
                    borderRadius: "4px",
                  }}
                />
              </span>
              <p className="text-secondary-300 text-start md:text-end text-[16px] font-[500] mb-6">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="w-full flex justify-end gap-4 mt-4">
                <button className="w-full justify-center border border-primary md:border-white text-primary md:text-white px-4 py-2 rounded-full hover:bg-secondary hover:text-white md:hover:bg-white md:hover:text-primary transition flex items-center">
                  View Intro
                  <MdOutlinePlayCircle className="ml-1 h-4 w-4 md:h-6 md:w-6" />
                </button>
                <Link
                  to="/products"
                  className="w-full justify-center bg-primary md:bg-white text-white md:text-primary h-[48px] flex items-center px-4 py-2 rounded-full hover:bg-white hover:text-primary md:hover:bg-secondary md:hover:text-primary transition"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image sm */}
        <div className="flex md:hidden w-full md:w-[50%] justify-center items-end md:mt-0 relative z-0">
          <img
            src={HeroDogsImage}
            alt="Woman with dog"
            className="object-fit rounded-xl w-full max-w-[500px] transition-opacity duration-1000 ease-in-out relative z-30"
            style={{ borderRadius: "11.79px" }}
          />
          <div className="absolute -bottom-6 h-[60%] w-screen z-0  bg-secondary-80 rotate-3 " />
        </div>
      </div>
    </section>
  );
}

export default HeroDogsBanner;
