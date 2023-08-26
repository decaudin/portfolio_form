import React from "react";
import { Link } from "react-scroll"; 
import "../styles/Header.scss";

const Header = ({ onClickHome }) => {
    return (
        <div className="header">
            <div className="title">
                <h1>DECAUDIN XAVIER</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li className="navItem" onClick={onClickHome}>
                        <span className="navItemContent">Accueil</span>
                    </li>
                    <li className="navItem">
                        <Link to="skills" smooth={true} duration={500}>
                            <span className="navItemContent">Compétences</span>
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="portfolio" smooth={true} duration={800}>
                            <span className="navItemContent">Portfolio</span>
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="contact" smooth={true} duration={1000}>
                            <span className="navItemContent">Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;