'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import  Styles  from './navbar.module.css'


const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>{pathname.split("/").pop()}</div>
      <div className={Styles.menu}>
        <div className={Styles.search}>
          <MdSearch/>
          <input type="text" placeholder="search..." className={Styles.input} />
        </div>
        <div className={Styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications  size={20} />
          <MdPublic size={20} />

        </div>
      </div>
    
    </div>
  )
}

export default Navbar
