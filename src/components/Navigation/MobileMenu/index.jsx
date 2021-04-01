import React, {useState, useEffect} from 'react'
import classNames from 'classnames'

import styles from './MobileMenu.module.scss'
import MenuIcon from '../MenuIcon'
import {LogoElement, registerScroll} from '../commons'

export default function MobileMenu () {
  const [hasBackground, setHasBackground] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => registerScroll(setHasBackground), [])

  const navClasses = classNames({
    [styles.nav]: true,
    [styles.in_scroll]: hasBackground
  })

  return (
    <nav className={navClasses}>

      <div className={styles.top}>
        {LogoElement}
        <MenuIcon isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>

    </nav>
  )
}
