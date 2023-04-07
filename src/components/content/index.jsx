import React from "react";
import projectsImg from "../../assets/Web development _Isometric.svg";
import blogsImg from "../../assets/Notifications_Isometric.svg";
import { useNavigate } from "react-router-dom";

const Content = () => {
    const navigate = useNavigate()
  return (
    <div className="h-[90vh] pt-8">
      <h2 className=" pt-10 h-[10vh] flex items-center justify-center text-center font-semibold text-7xl">
        <span>
          My <span className="text-primaryColor">Work💻</span>
        </span>
      </h2>

      <div className="flex items-center justify-center gap-12 mt-16">
        <div className="w-[350px] h-[450px] transition-all duration-300 bg-white hover:bg-gray-100 rounded-3xl shadow-xl text-center hover:translate-y-[-10px] hover:cursor-pointer hover:shadow-2xl" onClick={() => navigate('/projects')}>
          <div className="flex justify-center mt-4">
            <img className="w-4/5" src={projectsImg} />
          </div>
          <h3 className="mt-6 text-3xl font-bold">
            My <span className=" text-primaryColor">Projects</span>
          </h3>
          <p className="text-gray-600 text-lg mt-2 px-6">
            I build exciting projects. Check them out here!
          </p>
          <div className="mt-4 text-xl font-bold text-primaryColor">
            <a href="/projects" className="block transition-all duration-300 border-2 mx-auto w-[10rem] px-4 py-2 rounded-2xl border-primaryColor hover:bg-primaryColor hover:text-gray-100">My Projects</a>
          </div>
        </div>

        <div className="w-[350px] h-[450px] transition-all duration-300 bg-white hover:bg-gray-100 rounded-3xl shadow-xl text-center hover:translate-y-[-10px] hover:cursor-pointer hover:shadow-2xl" onClick={() => navigate('/blogs')} >
          <div className="flex justify-center mt-4">
            <img className="w-4/5" src={blogsImg} />
          </div>
          <h3 className="mt-6 text-3xl font-bold">
            My <span className=" text-primaryColor">Blogs</span>
          </h3>
          <p className="text-gray-600 text-lg mt-2 px-6">
            I write informative blogs. Check them out here!
          </p>
          <div className="mt-4 text-xl font-bold text-primaryColor">
            <a href="/blogs" className="block transition-all duration-300 border-2 mx-auto w-[10rem] px-4 py-2 rounded-2xl border-primaryColor hover:bg-primaryColor hover:text-gray-100">My blogs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
