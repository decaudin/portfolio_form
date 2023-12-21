import "./index.scss";
import iconeGithub from "../../assets/icone/iconGithub.png";
import iconeLinkedin from "../../assets/icone/iconLinkedin.png";

const Footer = () => {
    return (
        <div className="footer">
          <p>© 2023 Decaudin Xavier. Tous droits réservés.</p>
          <div className="contactLink">
          <a href="https://www.linkedin.com/in/xavier-decaudin-947021289/" target="_blank" rel="noopener noreferrer" className="codeLink"><img className="iconeLinkedin" src={iconeLinkedin} alt="logo Linkedin" /></a>
          <a href="https://github.com/decaudin" target="_blank" rel="noopener noreferrer" className="codeLink"><img className="iconeGithub" src={iconeGithub} alt="logo Github" /></a>
          </div>
        </div>   
    )
}

export default Footer;