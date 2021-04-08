import React from 'react'

import styles from './Hero.module.scss'

export default function Hero () {
  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <div className={styles.presentation_container}>
          <p className={styles.text_primary}>
            <span>{"I'm "}</span>
            <span className={styles.name}>{'Edoardo Pessina'}</span>
          </p>
          <p className={styles.occupation}>{'fullstack developer'}</p>
        </div>

      </div>

    </div>
  )
}
