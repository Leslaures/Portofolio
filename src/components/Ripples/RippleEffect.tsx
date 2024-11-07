import { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';
import backgroundImage from '../../assets/chris-lawton-3Ik7xWYJv3U-unsplash.jpg';

declare global {
  interface Window {
    jQuery: any;
  }
}

const RippleEffect = () => {
  useEffect(() => {
    // S'assurer que jQuery est global
    window.jQuery = $;

    // Utiliser setTimeout pour retarder un peu l'effet Ripples
    setTimeout(() => {
      $('#ripple-element').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });
    }, 100);

    // Nettoyer l'effet lorsque le composant est démonté
    return () => {
      $('#ripple-element').ripples('destroy');
    };
  }, []);

  return (
    <div
      id="ripple-element"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`, // Définit l'image de fond
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Contenu de l'élément */}
    </div>
  );
};

export default RippleEffect;
