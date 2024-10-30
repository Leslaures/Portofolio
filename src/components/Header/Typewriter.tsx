import TypewriterEffect from 'typewriter-effect';

const Typewriter: React.FC = () => { 
  return (
      <TypewriterEffect
          onInit={(Typewriter) => { 
              Typewriter
                  .typeString('Je suis Laure Maffini')
                  .pauseFor(500)
                  .deleteChars(13)
                  .typeString('ex Assistante de Direction')
                  .pauseFor(500)
                  .deleteChars(26)
                  .typeString('développeuse Web')
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

