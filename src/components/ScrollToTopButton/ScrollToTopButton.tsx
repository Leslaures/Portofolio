import { useState, useEffect } from 'react';
import "./ScrollToTopButton.css"



const ScrollToTopButton = () => {

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const handleScroll = () => {
    const { scrollY } = window;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;

    const progress = (scrollY / (bodyHeight - windowHeight)) * 100;

setScrollProgress(progress);

    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, []);

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
};

return (

  <div className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}>
    <div
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      aria-label="Retour en haut"
      className="button-container"
    >
      <img src="src/assets/arrow-up.webp" alt="Flèche vers le haut" className="arrow-up" />
    </div>
  </div>
  );

};


export default ScrollToTopButton