import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import html_logo from "../../assets/logo/html_logo.png";
import css_logo from "../../assets/logo/css_logo.png";
import js_logo from "../../assets/logo/js_logo.png";
import react_logo from "../../assets/logo/react_logo.png";
import nodejs_logo from "../../assets/logo/nodejs_logo.png";
import expressjs_logo from "../../assets/logo/expressjs_logo.png"
import mongodb_logo from "../../assets/logo/mongodb_logo.png";
import github_logo from "../../assets/logo/github_logo.png"


const Skills = () => {
    return (
        <div className="skills">
            <h2>Mes Compétences</h2>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faKeyboard} />
                    <h3>Rédaction Web</h3>
                    <span className="hover-text">Création de contenus optimisés pour le web. Utilisation des techniques de référencement (SEO) pour un maximum de visibilité.</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode} />
                    <h3>Développement Web</h3>
                    <span className="hover-text">Utilisation de technologies performantes pour développer des applications front-end attrayantes et interactives.</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <h3>Versionnage</h3>
                    <span className="hover-text">Utilisation de GitHub et des pratiques de versionnage pour assurer un développement fluide et une collaboration efficace.</span>
                </li>
            </ul>
            <div className="skillsLogo">
                <img className="htmlLogo" src={html_logo} alt="logo html5" />
                <img className="cssLogo" src={css_logo} alt="logo css3" />
                <img className="jsLogo" src={js_logo} alt="logo Javascript" />
                <img className="reactLogo" src={react_logo} alt="logo React" />
                <img className="nodejsLogo" src={nodejs_logo} alt="logo Nodejs" />
                <img className="expressjsLogo" src={expressjs_logo} alt="logo Expressjs" />
                <img className="mongodbLogo" src={mongodb_logo} alt="logo Mongodb" />
                <img className="githubLogo" src={github_logo} alt="logo Github" />
            </div>
        </div>
    )
}

export default Skills;