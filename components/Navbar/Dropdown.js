import Link from 'next/link'
import React from 'react'
import dropDown from '../../styles/Dropdown.module.scss'
const Dropdown = () => {
  return (
    <div className={dropDown.dropdown}>
      <button className={dropDown.dropbtn}>Dropdown</button>
      <div className={dropDown.dropdowncontent}>
        <Link href='#'>Link 1</Link>
        <Link href='#'>Link 2</Link>
        <Link href='#'>Link 3</Link>
      </div>
    </div>
  )
}

export default Dropdown
