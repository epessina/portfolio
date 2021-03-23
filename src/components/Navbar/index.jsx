import React from 'react'

import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from '../../assets/logo_light.svg'

const navItems = [
  {
    id: 'about',
    label: 'About'
  },
  {
    id: 'my-works',
    label: 'My Works'
  },
  {
    id: 'contact',
    label: 'Contact'
  }
]

export default function Navbar () {
  const onNavItemClick = event => {
    // eslint-disable-next-line no-console
    console.log(event.target)
  }

  return (
    <nav className={styles.nav}>

      <div className={styles.content}>

        <Logo className={styles.logo} title=' '/>

        <div className={styles.nav_items}>
          {navItems.map(navItem => (
              <a href='#' key={navItem.id} onClick={onNavItemClick}>
                {navItem.label}
              </a>
          ))}
        </div>

      </div>

    </nav>
  )
}
