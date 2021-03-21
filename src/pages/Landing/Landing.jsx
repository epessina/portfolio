import React from 'react'

import styles from './Landing.module.scss'
import Hero from '../../components/Hero/Hero'

export default function Landing () {
  return (
    <header className={styles.header}>
      <div className={styles.bg_container}>
        <ul className={styles.bg_shapes}>
          <li />
        </ul>
      </div>
      <Hero />
    </header>
  )
}
