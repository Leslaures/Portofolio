import TypewriterEffect from 'typewriter-effect';

const Typewriter: React.FC = () => { 
  return (
      <TypewriterEffect
          onInit={(Typewriter) => { 
              Typewriter
                  .typeString('Je suis <span style="color: #79F2D0;">Laure Maffini</span>')
                  .pauseFor(500)
                  .deleteChars(13)
                  .typeString('ex Assistante de Direction')
                  .pauseFor(500)
                  .deleteChars(26)
                  .typeString('<span style="color: #79F2D0;">développeuse Web</span>')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('Et si on travaillait ensemble ?')
                  .pauseFor(2500)
                  .start();
          }}
          options={{
              autoStart: true,
              loop: true, 
          }}
      />
  );
};


export default Typewriter;

