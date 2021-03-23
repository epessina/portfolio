import React from 'react'

import styles from './Landing.module.scss'
import Hero from '../../components/Hero'

export default function Landing () {
  return (
    <header className={styles.header}>
      <div className={styles.bg_container}>
        <ul className={styles.bg_shapes}>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <Hero />
    </header>
  )
}
