import React from 'react'

import styles from './Landing.module.scss'
import Navbar from '../../components/Navbar/Navbar'

export default function Landing () {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  )
}
