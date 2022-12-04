import React from 'react'
import styles from './MyIntro.module.css'

export default function index() {
  return (
    <div className={styles['main-container']}>
        <div className={styles['main-description']}>
            <h1 className={styles['description-title']}>Hi! I am <div>Om Gate</div></h1>
            <p>I am an Aspiring Full-stacks developer currently in second year of Engineering</p>
        </div>
        <div className={styles['image-container']}>
            <div className={styles['main-image-backdrop']}></div>
            <img className={styles['main-image']} src='./images/photo-no-bg.png'/>
        </div>
        
    </div>
  )
}
