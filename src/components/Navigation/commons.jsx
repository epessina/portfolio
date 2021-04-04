import React from 'react'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {animateScroll} from 'react-scroll'

import {ReactComponent as Logo} from '../../assets/logo_light.svg'

export const navItems = [
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

export const navIcons = [
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

export const LogoElement = className => (
  <Logo
    className={className}
    onClick={() => animateScroll.scrollToTop({duration: 1000, smooth: true})}
    title=' '
  />
)
