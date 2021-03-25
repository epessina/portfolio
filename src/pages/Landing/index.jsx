import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

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

      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faChevronDown} size='2x'/>
      </div>
    </header>
  )
}
