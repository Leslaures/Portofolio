import "./About.css"
import CardAbout from "./CardAbout";
import Status from "./Status";

const CardAboutList = [
    {   icon: "/src/assets/crowd-of-users.png",
        title: "L'Humain avant tout",
        description: "Je privilégie les environnements bienveillants, où l'entraide et la collaboration sont au cœur des projets.",
    },
    {   icon: "/src/assets/target.png",
        title: "Rigueur et efficacité",
        description: "Je m’engage à offrir une expérience utilisateur de qualité, alliant performance et souci du détail.",
    },
    {   icon: "/src/assets/jigsaw.png",
        title: "Adaptabilité",
        description: "Je m’adapte rapidement aux environnements, aux nouveaux défis techniques et aux besoins des projets.",
    },
    {   icon: "/src/assets/optimization.png",
        title: "Passion pour l’optimisation",
        description: "J’aime identifier des moyens d’optimiser les performances, qu’il s’agisse de processus ou d’applications.",
    },
    {   icon: "/src/assets/eye.png",
        title: "Sens de l'esthétique",
        description: "Je cherche à allier fonctionnalité et design pour créer des applications intuitives, visuellement attrayantes et offrant une expérience utilisateur fluide et agréable.",
    },
    // {   icon: "/src/assets/list.png",
    //     title: "Organisation et gestion de projet",
    //     description: "Je sais structurer et gérer efficacement les projets, en respectant délais et objectifs.",
    // },
]

function About () {
    return (
        <div id="about">
            <h2>À propos</h2>
            <div id="sections">
                <section id="sectiontexte">
                    <p>
                        Développeuse web passionnée par la technique et l'optimisation, j’ai effectué une transition vers le développement web après 14 ans en tant que technicienne groupe dans le tourisme puis en tant qu'assistante de direction. Mon parcours professionnel a toujours eu un même fil rouge : la satisfaction client. Je conçois aujourd'hui des solutions guidées par le souci d’une expérience utilisateur optimale.
                    </p>             
                    <p>
                        Si vous cherchez une développeuse polyvalente, technique et attentive aux détails, n'hésitez pas à me contacter pour en discuter !
                    </p>
                </section>
                <section id="sectionvaleurs">
                    <h3>Mes valeurs et points forts</h3>
            <div className="card-list">
                {CardAboutList.map((card, index) => (
                    <CardAbout key={index} icon={card.icon} title={card.title} description={card.description} />
                ))}
            </div>
                </section>
            </div>
            <Status />
        </div>
    )
}

export default About;
