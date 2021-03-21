import React from 'react'

import styles from './Tagline.module.scss'

export default function Tagline () {
  return (
    <div className={styles.container}>
      <div>
        <span>{'I '}</span>
        <span className={styles.varying_text}>{'design'}</span>
      </div>
      <div>{'awesome software form start to finish'}</div>
    </div>
  )
}
