import React, {useState, useEffect} from 'react'
import {Link, animateScroll} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

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

const navIcons = [
  {
    id: 'github',
    icon: faGithub,
    url: 'https://github.com/epessina'
  },
  {
    id: 'linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/edoardopessina/'
  }
]

export default function Navbar () {
  const [hasBackground, setHasBackground] = useState(false)

  const handleScroll = () => setHasBackground(window.scrollY > 20)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <nav className={`${styles.nav} ${hasBackground ? styles.bg : ''}`}>

      <div className={styles.content}>

        <Logo
          className={styles.logo}
          onClick={() => animateScroll.scrollToTop({duration: 1000, smooth: true})}
          title=' '
        />

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

          <div className={styles.icons_container}>
            {navIcons.map(navIcon => (
              <div
                className={styles.icon}
                key={navIcon.id}
                onClick={() => window.open(navIcon.url, '_blank')}
              >
                <FontAwesomeIcon icon={navIcon.icon}/>
              </div>
            ))}
          </div>
        </div>

      </div>

    </nav>
  )
}
