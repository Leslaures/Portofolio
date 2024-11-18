import "./Header.css"
import ParticlesBackground from "./ParticlesBackground"
import Typewriter from "./Typewriter"
import Burger from "../Burger/Burger"
import Rightcontactmenu from "./Rightcontactmenu"


function Header () {
    return (
    <>
    <header id="home">

        <div id="background">
        <ParticlesBackground />
        </div>
        <div>
            <Rightcontactmenu />
        </div>
        <div className="headerContent">
            <section id="photoAndMainNav">
                <figure>
                    <img src="src\assets\photo_de_profil.jpg" alt="Profil de Laure Maffini" />
                    <h1>Laure MAFFINI, <br/> développeuse fullstack</h1>
                </figure>
                <Burger />
                <nav id="menuPpal">
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#about">A propos</a></li>
                        <li><a href="#competences">Compétences</a></li>
                        <li><a href="#portfolio">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </section>

            <div className="typewriter-text">
                <Typewriter />
            </div>

            <section id="menuDesContacts">
                <nav id="contactezmoi">
                    <ul>
                        <li><a href="mailto: lauremaffini@gmail.com">Email</a></li>
                        <li><a href="https://github.com/Leslaures" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/laure-maffini-9368b4139/" target="_blank" rel="noreferrer">Linkedin</a></li>
                    </ul>
                </nav>

            </section>

        </div>
    </header>
    </>
)}

export default Header


