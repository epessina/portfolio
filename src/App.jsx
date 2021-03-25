import React from 'react'

import styles from './App.module.scss'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'

export default function App () {
  return (
    <div className={styles.content}>
      <Navbar />
      <Landing />
      <About />
    </div>
  )
}
