import "./Portfolio.css"
import CardProject from "./CardProject";

const projectsList = [
    {
        name: "Dominos Clicker",
        imgSrc: "./src/assets/Dominos-Clicker.png",
        description: "",
        stacksfront: "",
        stackback: "",
        lien: "",
        repo: "",        
    }
]
function Portfolio () {
    return (
        <div id="portfolio">
            <h2>Mon Portfolio</h2>
            <div className="portfolio-grid">
                {projectsList.map((project, index) => (
                <CardProject
                    key={index}
                    name={project.name}
                    imgSrc={project.imgSrc}
                    description={project.description}
                    stacksfront={project.stacksfront}
                    stackback={project.stackback}
                    lien={project.lien}
                    repo={project.repo}
                />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;