import NavBar from "../Nav/NavBar"
import "./Header.css"
import ParticlesBackground from "./ParticlesBackground"
import Typewriter from "./Typewriter"

function Header () {
    return (
    <>
    <header>

        <div className="background">
        <ParticlesBackground />
        </div>

        <div className="headerContent">
            <section id="photoAndMainNav">
                <figure>
                    <img src="src\assets\photo_de_profil.jpg" alt="photo de profil" />
                    <h1>Laure MAFFINI, <br/> développeuse Web</h1>
                </figure>
                <NavBar />
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


