import React, { useState } from "react";
import Modal from "react-modal";
import "./index.scss";
import Booki from "../../assets/projects/Booki.png";
import SophieBluel from "../../assets/projects/SophieBluel.png";
import NinaCarducci from "../../assets/projects/NinaCarducci.png";
import Kasa from "../../assets/projects/Kasa.png";
import MonVieuxGrimoire from "../../assets/projects/MonVieuxGrimoire.png";

const Portfolio = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [projectTitle, setProjectTitle] = useState("");

    const projects = [
        {
            image: Booki,
            title: "Booki - Agence de Voyage",
            description: (
                <div>
                    <p>Booki est une start-up qui a pour objectif de développer un site internet permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix.</p>
                    <p>Poste : Développeur Web stagiaire</p>
                    <p>Mission : Implémentation de l'interface du site Web à l'aide de code HTML et CSS.</p>
                    <p>Difficultés rencontrées : Bien structurer et organiser mon code, définir correctement les éléments parents et enfants, leur donner une dénomination de classe réfléchie, redimensionner les images, et bien sur gérer le côté responsive de la page. J'ai donc du apprendre les bonnes pratiques pour les languages HTML et CSS et définir des largeurs en % afin d'avoir une page responsive.</p>
                    <p>Compétences :</p>
                    <ul>
                        <li>Mettre en place un environnement de développement front-end</li> 
                        <li>Versionner un projet avec Git et GitHub</li>
                        <li>Implémenter une interface responsive avec HTML et CSS</li>
                        <li>Intégrer du contenu conformément à une maquette avec HTML et CSS</li> 
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/decaudin/Booki_Decaudin_Xavier.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consultez le code</a>
                        <a href=" https://decaudin.github.io/Booki_Decaudin_Xavier/" target="_blank" rel="noopener noreferrer" className="codeLink">Visitez le site</a>
                    </div>    
                </div>
            ),
        },
        {
            image: SophieBluel,
            title: "Sophie Bluel - Architecte",
            description: (
                <div>
                    <p>L'agence ArchiWebos est chargée de la conception du site portfolio de l'architecte d'intérieur Sophie Bluel.</p>
                    <p>Poste : Développeur Front-end assistant une équipe de l'agence</p>
                    <p>Missions : Développer la page de présentation du travail de l'architecte, la page de connexion de l'administrateur du site et la modale de téléchargement de nouveaux travaux.</p>
                    <p>Difficultés rencontrées : La grande difficulté de ce projet a été d'apprendre le language JavaScript et de créer des fonctions à partir de zéro. J'ai donc du faire beaucoup de lectures, d'exercices et de recherches avant de me lancer dans le code. Les console log m'ont beaucoup aidé à voir où il y avait des problèmes et à avancer pas à pas.</p>
                    <p>Compétences :</p>
                    <ul>
                        <li>Manipuler les éléments du DOM avec JavaScript</li>
                        <li>Récupérer les données utilisateurs dans le JavaScript via des formulaires</li>
                        <li>Gérer les événements utilisateurs avec JavaScript</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/decaudin/Sophie_Bluel_Decaudin_Xavier.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consultez le code</a>
                    </div>
                </div>
            ),
        },
        {
            image: NinaCarducci,
            title: "Nina Carducci - Photographe",
            description: (
                <div>
                    <p>L'un de mes services consiste à proposer une optimisation du référencement aux nouveaux clients. Nina Carducci est une photographe qui fait partie de mes prospects.</p> 
                    <p>Poste : Développeur freelance</p>
                    <p>Missions : Optimiser les performances du site, son référencement (SEO) ainsi que son accessibilité, et débugger deux fonctionnalités.</p>
                    <p>Difficultés rencontrées : L'amélioration des performances pour la version mobile a été la partie la plus compliqué de ce projet. Il a fallu se concentrer sur les images, le placement correct des balises dans le code HTML, en particulier les balises script, la minification de fichier ainsi que les CDN de Bootstrap.</p>
                    <p>Compétences :</p>
                    <ul>
                        <li>Optimiser les performances et le référencement d'un site Web</li>
                        <li>Rédiger un cahier de recette pour tester un site</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/decaudin/Nina_Carducci.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consultez le code</a>
                        <a href="https://decaudin.github.io/Nina_Carducci/" target="_blank" rel="noopener noreferrer" className="codeLink">Visitez le site</a>
                    </div>
                </div>
            ),
        },
        {
            image: Kasa,
            title: "Kasa - Location immobilière",
            description: (
                <div>
                    <p>Kasa est l'un des leaders de la location d'appartements entre particuliers en France. Ils ont lancé une refonte totale de leur site pour passer à une pile complète en JavaScript avec Node.js côté back-end et React côté front-end.</p>
                    <p>Poste : Développeur Front-end freelance</p>
                    <p>Mission : Démarrer le projet React et développer l'ensemble de l'application, y compris les composants et les routes, en suivant la maquette fournie.</p>
                    <p>Difficultés rencontrées : Bien comprendre React et son côté modulaire, afin de bien découper les différentes parties en composant. La construction du slider a également été compliqué, avec la fonctionnalité permettant d'aller de la dernière à la première image et inversement et la disparition des flèches de navigation sur les sliders à une seule image. Il m'a fallu avoir une bonne vision d'ensemble du site afin de bien définir les différents composants parents, enfants, les props ..</p>
                    <p>Compétences :</p>
                    <ul>
                        <li>Initialiser une application avec Create React App</li>
                        <li>Configurer la navigation entre les pages de l'application avec React Router</li>
                        <li>Développer des éléments d'interface d'un site web grâce à des composants React</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/decaudin/Kasa-location-immobiliere.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consultez le code</a>
                        <a href="https://kasa-location-immobiliere-6ed2fzanf-xddecaudin-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer" className="codeLink">Visitez le site</a>
                    </div>
                </div>
            ),
        },
        {
            image: MonVieuxGrimoire,
            title: "Mon Vieux Grimoire - Notation de livres",
            description: (
                <div>
                    <p>Le Vieux Grimoire est une petite chaîne de librairies située à Lille qui souhaite lancer un site internet de référencement et de notation des livres.</p>
                    <p>Poste : Développeur back-end freelance</p>
                    <p>Mission : Collaborer avec un développeur front-end pour combiner nos compétences sur un nouveau projet appelé Mon Vieux Grimoire. Mon travail est de développer toute la partie back-end.</p>                 
                    <p>Difficultés rencontrées : La découverte du back-end a été compliqué. Il m'a fallu comprendre comment fonctionne une API REST, la définition et la gestion des routes, les middlwares, les fonctions de controllers. J'ai du suivre le cours à la lettre et être très rigoureux quant à l'écriture du code, la moindre erreur de frappe pouvant être la cause du non-fonctionnement du projet.</p>
                    <p>Compétences :</p>
                    <ul>
                        <li>Implémenter un modèle logique de données conformément à la réglementation</li>
                        <li>Stocker des données et mettre en œuvre des opérations CRUD de manière sécurisée</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/decaudin/Mon_Vieux_Grimoire.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consultez le code</a>
                    </div>
                </div>
            ),
        },
    ];

    const openModal = (title, desc) => {
        setProjectTitle(title);
        setDescription(desc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setProjectTitle("");
        setDescription("");
        setModalOpen(false);
    };

    return (
        <div className="portfolio">
            <h2>Mon Portfolio</h2>
            <p className="portfolioDescription">
                Vous retrouverez ici les projets que j'ai réalisé au cours de ma formation :
            </p>
            <div className="imageProject">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="portfolioImageContainer"
                        onClick={() => openModal(project.title, project.description)}
                    >
                        <img src={project.image} alt={project.title} className="portfolioImage" />
                        <div className="overlay">
                            <h3 className="overlayText">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modalContent"
                overlayClassName="modalOverlay"
            >
                <span className="closeButton" onClick={closeModal}>
                    &times;
                </span>
                <div className="modalText">
                    <h2 className="modalTitle">{projectTitle}</h2>
                    <div className="modalDescription">{description}</div>
                </div>
            </Modal>
        </div>
    );
};

export default Portfolio;