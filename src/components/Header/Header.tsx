// import { Anchor } from "@mui/icons-material"
import "./Header.css"
// import ParticlesBackground from "./ParticlesBackground"
import Typewriter from "./Typewriter"
import Burger from "../Burger/Burger"

function Header () {
    return (
    <>
    <header>

        {/* <div className="background">
        <ParticlesBackground />
        </div> */}

        <div className="headerContent">
            <section id="photoAndMainNav">
                <figure>
                    <img src="src\assets\photo_de_profil.jpg" alt="photo de profil" />
                    <h1>Laure MAFFINI, <br/> développeuse Web</h1>
                </figure>
                <Burger />
                <nav id="menuPpal">
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#about">A propos</a></li>
                        <li><a href="#competences">Compétences</a></li>
                        <li><a href="#portofolio">Portfolio</a></li>
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
                        <li><a href="https://github.com/Leslaures" target="_blank">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/laure-maffini-9368b4139/" target="_blank">Linkedin</a></li>
                    </ul>
                </nav>
            </section>

        </div>
    </header>
    </>
)}


export default Header


