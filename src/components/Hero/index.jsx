import React from 'react'
// import Typewriter from 'typewriter-effect'

import styles from './Hero.module.scss'

// const typeWriterOptions = {
//   strings: ['think', 'design', 'build', 'test', 'deploy'],
//   autoStart: true,
//   loop: true
// }

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

        {/* <div className={styles.tagline_container}> */}
        {/*  <div className={styles.typewriter_container}> */}
        {/*    <span>{'I '}</span> */}
        {/*    <Typewriter options={typeWriterOptions}/> */}
        {/*  </div> */}
        {/*  <div className={styles.typewriter_sub_text}> */}
        {/*    {'awesome software form start to finish'} */}
        {/*  </div> */}
        {/* </div> */}

      </div>

    </div>
  )
}
