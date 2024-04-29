import React from 'react'
import {ProjectsList} from './ProjectsList'


export default function index() {
  return (
    <div id = 'projects' className='fade-in'>
      <h1 className='text-center text-4xl leading-[4rem] md:text-7xl mt-10 font-semibold'>My <span className=''>Projects 💻</span></h1>
      <div className=" justify-items-center md:my-12 mx-4 grid grid-cols-1 grid-flow-row md:gap-8 lg:grid-cols-3">
      {
        ProjectsList.map((project) => {
          return (
            <div className="flex flex-col items-center justify-center py-8 px-2 md:px-4 text-center w-[100%] md:max-w-[400px] max-h-[550px] mt-12 rounded-lg outline outline-1 outline-neutral-800">
              <h3 className=" text-2xl font-semibold ">{project.name}</h3>
              <p className="text-gray-500 my-2 mx-auto">{project.description}</p>
              <img className='block mx-auto my-4 outline outline-1 rounded-lg outline-neutral-700 w-[100%] md:w-full' src = {project.src}/>
              <a target='_blank' className='block transition-all duration-300 mx-auto border-[3px] border-purple-700 my-2 rounded-lg w-[10rem] py-2 text-lg font-semibold hover:text-purple-700 text-white bg-purple-700 hover:bg-white' href={project.projectLink}>Live Demo</a>
              <a target='_blank' className = 'block transition-all duration-300 mx-auto border-[3px] border-purple-200 my-2 rounded-lg w-[10rem] py-2 text-lg font-semibold hover:text-purple-800 text-black bg-purple-200 hover:bg-white' href={project.sourceLink}>Source Code</a>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
