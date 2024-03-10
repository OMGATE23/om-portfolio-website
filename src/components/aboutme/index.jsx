import React from "react";
import illustration from "../../assets/Web development _Isometric.svg";
import { StarIcon } from "@heroicons/react/20/solid";
const Aboutme = () => {
  return (
    <div className=" pt-8">
        <h2 className=" py-4 text-center font-semibold text-4xl leading-[3.5rem] md:text-7xl">Hey, I'm Om 👋</h2>
      <div className=" my-12 flex flex-col-reverse md:flex-row items-center justify-evenly  ">
        <div className="md:w-[60%] w-[80%]">
          <ul className="about-me list-disc">
            {/* <li className="flex md:border-none border-y-[1px] py-4 border-neutral-800  items-center justify-start md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              <StarIcon width={20} />
              <span className="w-[80%]">
                I am Om Gate
                
              </span>
            </li> */}
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              {/* <StarIcon width={20} /> */}
              <span>
                I am a Full-Stack Developer who loves to build web-apps.</span>
            </li>
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              {/* <StarIcon width={20} /> */}
              <div className="w-[80%]">I'm currently working at Vidyartha as Software Developer Intern. </div>
            </li>
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              {/* <StarIcon width={20} /> */}
              <span>
                I participate in hackathons & have won one with my app 
                <a href="https://get-break-free.vercel.app/" target="_blank" className="text-purple-400"> Breakfree.</a>
                </span>
            </li>
            <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800 items-start md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
            {/* <StarIcon width={20} /> */}
              <span className="w-[80%]">
                My skills include :{" "}
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
            <li className="flex justify-start md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              {/* <StarIcon width={20} /> */}
              <span className="w-[80%]">I'm a student at College of Engineering, Pune {"(2025 Batch)"}{" "} and have won awards for my performance.</span>
            </li>
            {/* <li className="flex md:border-none border-b-[1px] pb-4 border-neutral-800  items-center md:leading-10 my-4 text-lg md:text-xl gap-4 font-semibold ">
              <StarIcon width={20} /><span className="w-[80%]">I love web-development 😊</span>
            </li> */}
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
