import React from "react";
import projectsImg from "../../assets/Web development _Isometric.svg";
import blogsImg from "../../assets/Notifications_Isometric.svg";
import { useNavigate } from "react-router-dom";
import Projects from "../../pages/projects/";
import Blogs from "../../pages/blogs"

const Content = () => {
    const navigate = useNavigate()
  return (
    <div className=" pt-8">

      <Projects/>
    </div>
  );
};

export default Content;
