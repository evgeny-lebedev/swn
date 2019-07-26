import React from 'react';
import styles from './Header.module.css'
import NavigationMenu from "./NavigationMenu/NavigationMenu";

function Header() {

    return (
        <header className={styles.header}>
            <NavigationMenu/>
        </header>
    );
}

export default Header;