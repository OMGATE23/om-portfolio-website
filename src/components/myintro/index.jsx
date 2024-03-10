import React from "react";
let skills = ["Javascript" , "ReactJS" , "NextJS" , "CSS" , "Tailwind" , "NodeJS" , "ExpressJS" , "HTML5" , "Svelte" ]
export default function index() {
  return (
    <div className="fade-in flex flex-col gap-8 items-center justify-center text-neutral-50 my-12 md:my-4 md:h-[90vh]">
      <h1 className=" text-4xl md:text-6xl mx-2  font-semibold text-center">
        Hi! I am Om Gate👋🏻
      </h1>
      <h2 className=" w-[90%] md:w-[60%] text-center md:leading-[3rem] font-[600] text-blue-400 text-2xl md:text-4xl">Building beautiful <span className="text-blue-200">Full stack Applications</span>, one line of code at a time </h2>
      <div className="flex justify-center gap-2 md:gap-4 flex-wrap w-[90%] md:w-[50%]">
        {
          skills.map(skill => <p className="outline outline-1 outline-blue-900 text-blue-200 py-1 px-4 rounded-full">{skill}</p>)
        }
      </div>
    </div>
  );
}
