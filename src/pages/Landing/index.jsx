import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'

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

      <Link
        className={styles.arrow}
        duration={500}
        smooth
        to='about'
      >
        <FontAwesomeIcon icon={faChevronDown} size='2x'/>
      </Link>
    </header>
  )
}
