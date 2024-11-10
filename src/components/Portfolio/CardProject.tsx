import React, { useState} from "react";
import "./CardProject.css"

interface CardProjectProps {
    name: string;
    imgSrc: string;
    description: string;
    stacksfront: string;
    stackback: string;
    lien: string;
    repo: string;
  }

function CardProject ({name, imgSrc,description}:CardProjectProps) {
    const [isFlipped, setisFlipped] = useState(false);
console.log(imgSrc);
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
            </div>
        </div>
    );
}

export default CardProject;