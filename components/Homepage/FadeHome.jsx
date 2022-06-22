import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Fade.module.scss'
import hero from '../../images/hero.jpg'
import Link from 'next/link'

function FadeHome() {
  return (
    <div className={styles.root}>
      <div className={styles.background} />
      <Image
        src={hero}
        alt='Custom Card Component'
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        placeholder='blur'
        priority
        quality='50'
      />
      <div className={styles.wrapper}>
        <h1>A great card component.</h1>
        <h2>Custom CSS built with love.</h2>
        <Link href='/'>
          <a aria-label='visit a new page'>
            <button className={styles.button} aria-label='Learn More'>
              Custom Card
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FadeHome
