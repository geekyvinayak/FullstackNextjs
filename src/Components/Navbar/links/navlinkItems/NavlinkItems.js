'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './navlinks.module.css'
function NavlinkItems({item,handelDrawer}) {
  
  const pathname = usePathname()
  return (
    <Link onClick={handelDrawer} href={item.path} key={item.path} className={`${styles.container} ${pathname=== item.path && styles.active}`}>{item.title}</Link>
  )
}

export default NavlinkItems