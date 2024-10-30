import "./NavRight.css";

const NavRight = ({ open }) => {
    return (
        <div id="menuPpal">
            <ul className={open ? "open" : ""}>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">A propos</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default NavRight;