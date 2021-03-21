import React from 'react'

import styles from './Hero.module.scss'

export default function Hero () {
  return (
    <div className={styles.container}>

      <div className={styles.presentation_container}>
        <div className={styles.presentation}>
          <p className={styles.text_primary}>
            <span>{"I'm "}</span>
            <span className={styles.name}>{'Edoardo Pessina'}</span>
          </p>
          <p className={styles.occupation}>{'fullstack developer'}</p>
        </div>
      </div>

      <div className={styles.tagline_container}>
        <div className={styles.tagline}>
          <div>
            <span>{'I '}</span>
            <span className={styles.varying_text}>{'design'}</span>
          </div>
          <div>{'awesome software form start to finish'}</div>
        </div>
      </div>

    </div>
  )
}
