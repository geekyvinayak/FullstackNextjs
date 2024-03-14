import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link'
function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.uppercard}>
        <div className={styles.cardImage}>
        <Image src="/postsample.jpeg" fill className={styles.img}></Image>
        </div>
        <span className={styles.postDate}>12/13/14</span>
      </div>
      <div className={styles.lowercard}>
        <h3 className={styles.cardtitle}>Title</h3>
        <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabit</p>
        <Link href="/blog/post" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard