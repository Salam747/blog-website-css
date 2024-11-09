import { Heebo } from "next/font/google";
import Image from "next/image";
import React from "react";

const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="my-[66px] p-6 mx-auto md:w-[1030] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between">
      {/* text div */}

      <div className="w-[90%] md:w-[521px] md:h-[305px] flex flex-col md:justify-between items-start justify-evenly">
        <h1
          className={`${heebo.className} text-[27px] md:text-[48px] font-black text-myBlack `}
        >
          Hi, I am Abdul Salam <br />
          Creative Technologist
        </h1>
        <p
          className={`${heebo.className} text-myBlack text-[16px] font-medium`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo
          totam cumque rem error a quisquam facere, eos impedit.
        </p>

        <button
          className={`${heebo.className} w-[205px] h-[50px] bg-myPink text-white text-[18] font-medium rounded-md shadow-md shadow-myBlack/45`}
        >
          Download Resume
        </button>
      </div>

      {/* image div */}
      <div className="w-[292px] h-[299px] relative ">
        <Image
          className="z-50 rounded-full"
          src={"/assets/hero.jpg"}
          alt="hero-img"
          width={292}
          height={299}
        />
        <div className="bg-heroSalam w-[292px] h-[299px] absolute top-2 right-2 rounded-full -z-10 " />
      </div>
    </div>
  );
};

export default Hero;
