import React from "react";
import illustration from "../../assets/Web development _Isometric.svg";
import { StarIcon } from "@heroicons/react/20/solid";
const Aboutme = () => {
  return (
    <div className="h-[90vh] bg-LightGray02 pt-8">
        <h2 className=" pt-10 h-[10vh] flex items-center justify-center text-center font-semibold text-7xl"><span>Hey, I'm <span className="text-primaryColor">Om 👋</span></span></h2>
      <div className=" h-[75vh] flex items-center justify-evenly  ">
        <div>
          <ul className="w-[620px] px-4 ">
            <li className="flex items-center leading-10 my-4 text-xl gap-3 font-semibold text-black">
              <StarIcon width={20} />
              <span>
                I am{" "}
                <span className=" inline-block transition-all text-primaryColorFaded75 duration-300 hover:cursor-pointer hover:text-primaryColor hover:translate-y-[-5px]">
                  <span>
                    <a className="block font-bold text-xl">Om Gate</a>
                  </span>
                </span>
              </span>
            </li>
            <li className="flex items-center leading-10 my-4 text-xl gap-3 font-semibold text-black">
              <StarIcon width={20} />I am a Full-Stack Developer
            </li>
            <li className="flex items-start leading-10 my-4 text-xl gap-3 font-semibold text-black">
              <StarIcon className="mt-2" width={26} />
              <span>
                Skills include :{" "}
                <span className="text-primaryColorFaded75 font-bold">
                  {" "}
                  <span className=" inline-block transition-all duration-300 hover:cursor-pointer hover:text-primaryColor hover:translate-y-[-5px]">
                    Javascript
                  </span>
                  {" , "}
                  <span className=" inline-block transition-all duration-300 hover:cursor-pointer hover:text-primaryColor hover:translate-y-[-5px]">
                    Node.js
                  </span>
                  {" , "}
                  <span className=" inline-block transition-all duration-300 hover:cursor-pointer hover:text-primaryColor hover:translate-y-[-5px]">
                    Express
                  </span>
                  {" , "}
                  <span className=" inline-block transition-all duration-300 hover:cursor-pointer hover:text-primaryColor hover:translate-y-[-5px]">
                    MongoDB
                  </span>
                  {" , "}
                  <span className=" inline-block transition-all duration-300 hover:cursor-pointer hover:text-primaryColor hover:translate-y-[-5px]">
                    HTML
                  </span>
                  {" , "}
                  <span className=" inline-block transition-all duration-300 hover:cursor-pointer hover:text-primaryColor hover:translate-y-[-5px]">
                    CSS
                  </span>
                  {" , "}
                  <span className=" inline-block transition-all duration-300 hover:cursor-pointer hover:text-primaryColor hover:translate-y-[-5px]">
                    Tailwind
                  </span>
                </span>
              </span>
            </li>
            <li className="flex items-center leading-10 my-4 text-xl gap-3 font-semibold text-black">
              <StarIcon width={20} />
              Student at College of Engineering, Pune {"(2025 Batch)"}{" "}
            </li>
            <li className="flex items-center leading-10 my-4 text-xl gap-3 font-semibold text-black">
              <StarIcon width={20} />I love web-development 😊
            </li>
          </ul>
        </div>
        <div className="">
          <img className="scale-125" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
