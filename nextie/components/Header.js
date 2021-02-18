import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h3 className={headerStyles.title}>
                <span>Next.js </span>by Michael Cuccia
            </h3>
            <p className={headerStyles.para}>
                Server-Side Rendering
            </p>
        </div >
    )
}

export default Header
