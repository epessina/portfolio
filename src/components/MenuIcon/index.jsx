import React from 'react'
import classNames from 'classnames'

import styles from './MenuIcon.module.scss'

export default function MenuIcon ({isMobileMenuOpen, setIsMobileMenuOpen}) {
  const toggle = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const containerClasses = classNames({
    [styles.container]: true,
    [styles.active]: isMobileMenuOpen
  })

  return (
    <div className={containerClasses} onClick={toggle}>
      <div className={styles.box}>
        <div className={styles.inner} />
      </div>
    </div>
  )
}
