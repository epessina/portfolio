import React, {useState, useEffect} from 'react'

import variables from './styles/exports.module.scss'
import styles from './App.module.scss'
import Navbar from './components/Navigation/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import MobileMenu from './components/Navigation/MobileMenu'

export default function App () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div className={styles.content}>
      {windowWidth > variables.breakpointSm.slice(0, -2) ? <Navbar /> : <MobileMenu />}
      <Landing />
      <About />
    </div>
  )
}
