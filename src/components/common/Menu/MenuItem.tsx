import React from 'react'
import styles from '@styles/components/common/MenuItem.module.css'

interface MenuItemProps {
  onClick?: () => void
  children: React.ReactNode
}

const MenuItem = ({ onClick, children }: MenuItemProps) => {
  return (
    <li className={styles.root} onClick={onClick}>
      {children}
    </li>
  )
}

export default MenuItem
