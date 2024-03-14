import Image from 'next/image';
import styles from './homepage.module.css'

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Title Goes Here.</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
      <Image src='/brands.png' alt='brand images' fill></Image>
      </div>
    </div>
    <div className={styles.imageContainer}>
    <Image src='/hero.gif' alt='brand images' fill></Image>
    </div>
   </div>
  );
}