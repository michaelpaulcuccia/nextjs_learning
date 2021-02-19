import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h3 className={headerStyles.title}>
                <span>Exceptional </span>by Ren D.
            </h3>
            <p className={headerStyles.para}>
                <strong>Indian American. Mama. Wife. </strong>
            </p>
            <div>
                <small>I write about personal growth, self-awareness, life lessons, parenting and love.</small>
            </div>
        </div >
    )
}

export default Header
