import React from 'react'
import {ProjectsList} from './ProjectsList'
import styles from './Projects.module.css'


export default function index() {
  console.log(ProjectsList)
  return (
    <div className={styles['project-grid']}>
      {
        ProjectsList.map((project) => {
          return (
            <div className={styles['project-container']}>
              <p className={styles['project-title']}>{project.name}</p>
              <p className={styles['project-description']}>{project.description}</p>
              <img src = {project.src}/>
              <a href={project.projectLink}>Live Demo</a>
              <a href={project.sourceLink}>Source Code</a>
            </div>
          )
        })
      }
      
    </div>
  )
}
