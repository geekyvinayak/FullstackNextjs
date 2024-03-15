import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

function AboutPage() {
  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h3>About Agency</h3>
      <h1>We create digital ideas that are bigger,bolder, braveer and better. </h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
      <div className={styles.stats}>
        <div className={styles.statContainer}>
        <h2 className={styles.statsHeading}>10 K+</h2>
        <span className={styles.description}>Years of experience</span>
        </div>
        <div className={styles.statContainer}>
        <h2 className={styles.statsHeading}>243 K+</h2>
        <span className={styles.description}>People reached</span>
        </div>
        <div className={styles.statContainer}>
        <h2 className={styles.statsHeading}>5 K+</h2>
        <span className={styles.description}>Services and plugins</span>
        </div>
      </div>
    </div>
    <div className={styles.imageContainer}>
    <Image src='/about.png' alt='brand images' fill></Image>
    </div>
   </div>
  )
}

export default AboutPage