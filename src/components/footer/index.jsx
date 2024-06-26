import React from "react";

const Footer = () => {
  return (
    <div className="h-[20vh] flex flex-col justify-center items-center border-t border-neutral-800">
      <ul className="h-[10vh] w-full mt-4 mx-auto flex items-center justify-center gap-8"> 
          
        <li>
          <a href="https://github.com/OMGATE23" target="_blank">
            <i class="fa-brands fa-github text-3xl text-white"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/om-gate-68a5a3201/" target="_blank">
            <i class="fa-brands fa-linkedin text-3xl text-white"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/om_gate" target="_blank">
            <i class="fa-brands fa-twitter text-3xl text-white"></i>
          </a>
        </li>
      </ul>
      <p className="my-4 text-white">©This Website belongs to Om Gate</p>
    </div>
  );
};

export default Footer;
