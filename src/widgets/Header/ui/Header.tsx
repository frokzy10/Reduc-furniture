import React from 'react';
import cls from "./Header.module.scss"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={cls.header}>
            <nav>
                <ul>
                    <li><Link to="/">Домой</Link></li>
                    <li><Link to="/products">Товары</Link></li>
                    <li><Link to="/about_us">О нас</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;