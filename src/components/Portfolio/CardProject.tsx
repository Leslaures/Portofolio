import React, { useState} from "react";
import "./CardProject.css"

interface CardProjectProps {
    name: string;
    imgSrc: string;
    description: string;
    stackfront: string;
    stackback: string;
    lien: string;
    repo: string;
  }

function CardProject ({name, imgSrc,description, stackfront, stackback, lien, repo}:CardProjectProps) {
    const [isFlipped, setisFlipped] = useState(false);

    const toggleFlip = () => {
        if (isFlipped) {
            setisFlipped(false);
        } else {
            setisFlipped(true);
        }
      };


      return (
        <div className={`cardproject ${isFlipped ? "flipped" : ""}`} onClick={toggleFlip}>
            <div
                className="card-project-front"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="card-label">
                    <h4>{name}</h4>
                    <p className="plus-sign">+</p>
                </div>
            </div>
            <div className="card-project-back">
                <span className="description">{description}</span>
                <div className="sections">
                    <section className="stacks">
                        <span className="stacksfront"><p>Stack Front</p>{stackfront}</span>
                        <span className="stackback"><p>Stack Back</p>{stackback}</span>
                    </section>
                    <section className="liens">
                        <button className="lien">Voir le site{lien}</button>
                        <button className="repo"><p>GitHub</p>{repo}</button>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CardProject;