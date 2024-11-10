import React, { useState } from 'react';
import "./CardAbout.css";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

function CardAbout({icon, title, description}:CardProps){
    const [isFlipped, setisFlipped] = useState(false);

    const toggleFlip = () => {
        if (isFlipped) {
            setisFlipped(false);
        } else {
            setisFlipped(true);
        }
      };

      return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
        <div className="card-front">
            <img src={icon} />
            <h4>{title}</h4>
            <p className="plus-sign">+</p>
        </div>
        <div className="card-back">
            <span className='description'>{description}</span>
        </div>
      </div>
    );
}

export default CardAbout;