import React from 'react';

import logoSrc from '../../../public/logo.png';
import styles from './Header.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logoSrc} alt="Logo" />
            <h1>The Movie DB</h1>
        </header>
    );
};

export default Header;
