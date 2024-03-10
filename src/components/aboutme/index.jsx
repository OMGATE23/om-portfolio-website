import React from "react";
import illustration from "../../assets/Web development _Isometric.svg";
import { StarIcon } from "@heroicons/react/20/solid";
const Aboutme = () => {
  return (
    <div className=" pt-8">
        <h2 className=" py-4 text-center font-semibold text-6xl md:text-7xl">Hey, I'm Om 👋</h2>
      <div className=" my-4 flex flex-col-reverse md:flex-row items-center justify-evenly  ">
        <div>
          <ul className=" px-4 ">
            <li className="flex md:border-none border-y-[1px] py-4 border-neutral-800  items-center justify-start md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              <StarIcon width={20} />
              <span className="w-[80%]">
                I am Om Gate
                
              </span>
            </li>
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              <StarIcon width={20} /><span>I am a Full-Stack Developer</span>
            </li>
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              <StarIcon width={20} /><div className="w-[80%]">Currently Interning at <span className="text-purple-400">Vidyartha.org</span></div>
            </li>
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800 items-start md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
            <StarIcon width={20} />
              <span className="w-[80%]">
                Skills include :{" "}
                <span className="font-bold">
                  {" "}
                  <span className=" transition-all duration-300 hover:cursor-pointer hover:translate-y-[-5px]">
                    Javascript
                  </span>
                  {" , "}
                  <span className=" transition-all duration-300 hover:cursor-pointer hover:translate-y-[-5px]">
                    Node.js
                  </span>
                  {" , "}
                  <span className=" transition-all duration-300 hover:cursor-pointer hover:translate-y-[-5px]">
                    Express
                  </span>
                  {" , "}
                  <span className=" transition-all duration-300 hover:cursor-pointer hover:translate-y-[-5px]">
                    MongoDB
                  </span>
                  {" , "}
                  <span className=" transition-all duration-300 hover:cursor-pointer hover:translate-y-[-5px]">
                    HTML
                  </span>
                  {" , "}
                  <span className=" transition-all duration-300 hover:cursor-pointer hover:translate-y-[-5px]">
                    CSS
                  </span>
                  {" , "}
                  <span className=" transition-all duration-300 hover:cursor-pointer hover:translate-y-[-5px]">
                    Tailwind
                  </span>
                </span>
              </span>
            </li>
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              <StarIcon width={20} />
              <span className="w-[80%]">Student at College of Engineering, Pune {"(2025 Batch)"}{" "}</span>
            </li>
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              <StarIcon width={20} /><span className="w-[80%]">I love web-development 😊</span>
            </li>
          </ul>
        </div>
        <div className="">
          <img className=" w-[240px] md:w-[360px]" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
