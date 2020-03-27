import React from 'react';
import MyButton from '../MyButton/MyButton';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = ({ homeButtonOnClick }) => {
    return (
        <header className={styles.header}>
            <NavLink to="/" >Home</NavLink>

            <NavLink to="/login">Login</NavLink>
            <NavLink to="/colors">Générateur de couleurs</NavLink>
            <NavLink to="/Compteur">Compteur</NavLink>
            <NavLink to="/Contenu">Contenu mappé</NavLink>
        </header>
    );
};

export default Header;