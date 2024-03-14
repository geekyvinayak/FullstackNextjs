"use client"
import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
function Navbar() {
  return (
    <div className={styles.container}>
    <div className={styles.logo}>Logo</div>
    <Links></Links>
    </div>
  )
}

export default Navbar