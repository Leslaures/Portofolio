import { useState, useEffect } from 'react';
import "./Rightcontactmenu.css"

function Rightcontactmenu() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTrigger = window.innerWidth < 768 ? 500 : 900; // 50px pour mobile, 100px pour desktop
      if (window.scrollY > scrollTrigger) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-menu ${isVisible ? 'visible' : ''}`}>
      <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/mail.webp" alt="Email" />
      </a>
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/github.png" alt="GitHub" />
      </a>
      <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  );
}

export default Rightcontactmenu;