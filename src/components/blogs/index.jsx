import React from 'react'
import BlogsList from '../blogs/Blogs'
const BlogsComponent = () => {
  return (
    <div id = "blogs" className='fade-in flex flex-col items-center justify-center my-12'>
      <h1 className='text-center text-4xl leading-[4rem] md:text-7xl mt-10 font-semibold'>My <span className=''>Blogs 📔</span></h1>
      <div className=" justify-items-center md:my-12 mx-4 grid grid-cols-1 grid-flow-row md:gap-8 lg:grid-cols-3 items-center">
      {
        BlogsList.map((project) => 
           (
            <div className="flex flex-col items-center justify-evenly py-8 px-4 md:px-12 text-center w-[100%] md:max-w-[400px] max-h-[550px] mt-12 rounded-lg outline outline-1 outline-neutral-800">
              <h3 className=" text-2xl font-semibold ">{project.title}</h3>
              <img className='block mx-auto my-10 outline outline-1  rounded-lg outline-neutral-700 w-[100%] md:w-full' src = {project.img}/>
              <a target='_blank' className='block transition-all duration-300 mx-auto border-[3px] border-purple-700 my-2 rounded-lg w-[10rem] py-2 text-lg font-semibold hover:text-purple-700 text-white bg-purple-700 hover:bg-white' href={project.href}>Blog Link</a>
            </div>
          )
        )
      }
      </div>
    </div>
  )
}

export default BlogsComponent