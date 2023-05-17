import React from 'react';
import s from './Header.module.css'
import logo from '../../../assets/img/logo.jpg'

const Header = () => {
    return (
        <div className={s.header}>
            <img alt='logo' className={s.logo} src={logo}/>
        </div>
    );
};

export default Header;