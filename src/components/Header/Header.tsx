import "./Header.css"
import ParticlesBackground from "../animations/ParticlesBackground"
import Typewriter from "../animations/Typewriter"

function Header () {
    return (
    <>
    <header>
        <div className="background">
        <ParticlesBackground />
        </div>
        <div className="headerContent">
            <section id="logo">
                <figure>
                    <img src="src/assets/photo_de_profil.jpg" alt="photo de profil" />
                </figure>
                <nav>
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#about">A propos</a></li>
                        <li><a href="#competences">Compétences</a></li>
                        <li><a href="#portofolio">Portofolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </section>
            
        <hr className="separateur"/>

            <section id="text">
                <div className="typewriter-text">
                <Typewriter />
                </div>
                <h1>Laure MAFFINI</h1>
                <h2>Développeuse Web</h2>
            </section>
        </div>
    </header>
    </>
)}


export default Header


