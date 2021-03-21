import React from 'react'

import styles from './Landing.module.scss'
import Hero from '../../components/Hero/Hero'

export default function Landing () {
  return (
    <header className={styles.header}>
      <Hero />
    </header>
  )
}
