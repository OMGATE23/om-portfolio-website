import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
        <h3 className={styles['header-name']}>Om Gate</h3>

        <ul>
            <li>
                <a href='/'>
                    Home
                </a>
            </li>

            <li>
                <a href='/'>
                    Projects
                </a>
            </li>

            <li>
                <a href = '/'>
                    Blogs
                </a>
            </li>
        </ul>
    </header>
  )
}
