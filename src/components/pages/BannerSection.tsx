// import React from "react";
import womanDog2 from "../../assets/img/WomanDog2.png";
import { MdOutlinePlayCircle } from "react-icons/md";

const BannerSection = () => {
  return (
    <section className="mt-8 bg-white max-w-[1500px]  mx-auto px-8 flex flex-col md:flex-row items-center justify-between px-4">
      {/* gerer lg*/}
      {/* Image lg*/}
      <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-between bg-gradient-to-br  md:bg-primary overflow-hidden rounded-[20px] relative md:rounded-[20px] ">
        <div className="hidden md:flex  w-full md:w-full h-full justify-center items-end  relative overflow-hidden  ">
          <div className="absolute h-full w-full z-0 -bottom-[180px] -left-[50px] rounded-tl-[99px] rotate-[28.25deg] bg-primary-80" />
          <img
            src={womanDog2}
            alt="Woman with dog"
            className="object-contain rounded-xl w-[513px] h-[342px] transition-opacity duration-1000 ease-in-out relative z-20"
            style={{ borderRadius: "11.79px" }}
          />
        </div>
        {/* Texte */}
        <div className=" hidden md:flex text-primary-80 relative h-full w-full flex justify-end">
          <div className="h-full w-full bg-secondary absolute z-10 rotate-[25.23deg] rounded-bl-[99px] -top-[50px] -left-[100px] hidden md:flex" />
          <div className="h-full w-[50%]  bg-secondary absolute ml-[500px] z-20 hidden md:flex" />
          <div className="relative p-6 z-20 xl:w-[70%] ">
            <div className="w-full justify-end p-2">
              <h1 className="w-full text-center md:text-end text-[36px] md:text-[52px] font-[700] md:font-[800]  leading-[60px] md:leading-[68px]">
                One More Friend
              </h1>
              <h2 className="w-full text-center md:text-end text-[24px] md:text-[36px] font-[700] ld:font-[700] mb-4">
                Thousands More Fun!
              </h2>
              <p className="text-secondary-300 text-center md:text-end text-[15px] font-[500] mb-6">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="w-full flex justify-end gap-4 mt-4">
                <button className="border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition flex items-center cursor-pointer">
                  View Intro <MdOutlinePlayCircle className="ml-2 h-6 w-6" />
                </button>
                <a
                  href="/products"
                  className="bg-primary text-white h-[48px] flex items-center px-4 py-2 rounded-full hover:bg-secondary hover:border hover:border-primary hover:text-black transition"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gerer sm */}
      {/* Image sm */}
      <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-between bg-gradient-to-br  bg-secondary overflow-hidden rounded-[20px] relative">
        <div className=" flex md:hidden text-primary-80 relative h-full w-full flex justify-end">
          <div className="relative  z-20 xl:w-[90%] ">
            <div className="w-full justify-end px-2 ">
              <h1 className="w-full text-center text-[30px]  font-[700]   leading-[50px] px-2">
                One More Friend
              </h1>
              <h2 className="w-full text-center text-[20px] font-[700] mb-4 px-2">
                Thousands More Fun!
              </h2>
              <p className="text-secondary-300 text-center text-[11px] font-[500] mb-6">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="w-full flex justify-end gap-4 mt-4">
                <button className="border border-primary text-primary px-4 py-2 rounded-full cursor-pointer hover:bg-primary hover:text-white transition flex items-center cursor-pointer">
                  View Intro <MdOutlinePlayCircle className="ml-2 h-6 w-6" />
                </button>
                <a
                  href="/products"
                  className="bg-primary text-white h-[48px] flex items-center px-4 py-2 rounded-full cursor-pointer hover:bg-secondary hover:border hover:border-primary hover:text-black transition"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden w-full md:w-[50%] justify-center items-end md:mt-0 bg-primary relative z-0">
          <div className="absolute h-[50%] w-full z-10 -top-[70px] rounded-br-[75px] rotate-[11.41deg] bg-secondary" />
          <img
            src={womanDog2}
            alt="Woman with dog"
            className="object-contain rounded-xl w-full max-w-[500px] transition-opacity duration-1000 ease-in-out relative z-30"
            style={{ borderRadius: "11.79px" }}
          />
          <div className="absolute h-full w-full z-0 -bottom-[110px]  rounded-tl-[59px] rotate-[20.25deg] bg-primary-80" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
