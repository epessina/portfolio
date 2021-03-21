import React from 'react'

import styles from './App.module.scss'
import Navbar from './components/Navbar/Navbar'
import Landing from './pages/Landing/Landing'

export default function App () {
  return (
    <div className={styles.content}>
      <Navbar />
      <Landing />
    </div>
  )
}
