import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="brand images" fill></Image>
      </div>
      <div className={styles.textContainer}>
        <form className={styles.form}>
          <input type="text" placeholder='Name and Surname' className={styles.inputField} ></input>

          <input type="email" placeholder='Email Address' className={styles.inputField}></input>

          <input type="number" placeholder='Phone Number' className={styles.inputField}></input>

          <textarea  placeholder='Message' rows={6} className={styles.inputTextArea}></textarea>

          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
