import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
        <h2 className={styles['header-name']}>Om Gate</h2>

        <ul className={styles['header-list']} >
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
