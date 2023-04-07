import React from 'react'
import {ProjectsList} from './ProjectsList'


export default function index() {
  console.log(ProjectsList)
  return (
    <div >
      <h1 className='text-center text-7xl mt-10 font-semibold'>My <span className='text-primaryColor'>Projects💻</span></h1>
      <div className=" justify-items-center my-12 grid grid-cols-1 lg:grid-cols-3">
      {
        ProjectsList.map((project) => {
          return (
            <div className="shadow-lg py-8 px-12 text-center max-w-[400px] max-h-[550px] rounded-3xl">
              <h3 className=" text-2xl font-semibold text-primaryColor">{project.name}</h3>
              <p className="text-gray-500 my-4 mx-auto">{project.description}</p>
              <img className='block mx-auto my-10 max-w-[300px]' src = {project.src}/>
              <a className='block transition-all duration-300 mx-auto border-[3px] border-purple-700 my-2 rounded-2xl w-[10rem] py-2 text-lg font-semibold hover:text-purple-700 text-white bg-purple-700 hover:bg-white' href={project.projectLink}>Live Demo</a>
              <a  className = 'block transition-all duration-300 mx-auto border-[3px] border-red-600 my-2 rounded-2xl w-[10rem] py-2 text-lg font-semibold hover:text-red-600 text-white bg-red-600 hover:bg-white' href={project.sourceLink}>Source Code</a>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
