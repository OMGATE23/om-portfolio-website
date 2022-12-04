import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
        <h2 className={styles['header-name']}>Om Gate</h2>

        <ul className={styles['header-list']} >
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>

            <li>
                <Link to='/projects'>
                    Projects
                </Link>
            </li>

            <li>
                <Link to = '/blogs'>
                    Blogs
                </Link>
            </li>
        </ul>
    </header>
  )
}
