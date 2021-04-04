import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import styles from './Navbar.module.scss'
import {navItems, navIcons, LogoElement} from '../commons'

export default function Navbar () {
  const [hasBackground, setHasBackground] = useState(false)

  const handleScroll = () => setHasBackground(window.scrollY > 20)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = classNames({
    [styles.nav]: true,
    [styles.in_scroll]: hasBackground
  })

  return (
    <nav className={navClasses}>

      <div className={styles.content}>

        {LogoElement(styles.logo)}

        <div className={styles.nav_items}>
          {navItems.map(navItem => (
              <Link
                activeClass={styles.active}
                className={styles.nav_item}
                key={navItem.id}
                smooth
                spy={true}
                to={navItem.id}
              >
                {navItem.label}
              </Link>
          ))}
        </div>

        <div className={styles.nav_icons}>
          {navIcons.map(navIcon => (
            <div
              className={styles.nav_icon}
              key={navIcon.id}
              onClick={() => window.open(navIcon.url, '_blank')}
            >
              <FontAwesomeIcon icon={navIcon.icon}/>
            </div>
          ))}
        </div>

      </div>

    </nav>
  )
}
