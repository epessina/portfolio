import React, {useState} from 'react'
import classNames from 'classnames'
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './MobileMenu.module.scss'
import MenuIcon from '../MenuIcon'
import {LogoElement, navIcons, navItems} from '../commons'

export default function MobileMenu () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navClasses = classNames({
    [styles.nav]: true,
    [styles.opened]: isMobileMenuOpen
  })

  return (
    <nav className={navClasses}>

      <div className={styles.top}>
        {LogoElement(styles.logo)}
        <MenuIcon isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>

      <div className={styles.nav_items}>
        {navItems.map(navItem => (
            <Link
              activeClass={styles.active}
              className={styles.nav_item}
              delay={400}
              key={navItem.id}
              onClick={() => setIsMobileMenuOpen(false)}
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

    </nav>
  )
}
