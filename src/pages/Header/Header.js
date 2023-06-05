import React from 'react'
import styles from '@/pages/Header/Header.module.css'

function Header({title}) {
    return (
        <header className={styles.header}>
            <img className={styles.angleSmallDown} src="/angle-small-down.svg" alt="Back button"/>
            <h1 className={styles.cargoOrders}>{title}</h1>
            <img className={styles.bell} src="/bell.svg" alt="Notificacions button"/>
        </header>
    )
}

export default Header
