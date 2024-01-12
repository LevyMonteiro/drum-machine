import { useContext, useEffect } from 'react';
import { ControllerContext } from '../context/ControllerContext';

export default function Keyboard() {
  const { power, setDisplayAss, soundGroup } = useContext(ControllerContext);

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    audio.currentTime = 0;
    audio.play();

    setDisplayAss(power ? audio.textContent : '');

    // add animation when the drum-pad is pressed
    const drumPadElement = audio.parentNode;
    drumPadElement.classList.add('dark:brightness-150', 'brightness-125');
    setTimeout(() => {
      drumPadElement.classList.remove('dark:brightness-150', 'brightness-125');
    }, 100);
  };

  // track the pressed key
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    });
  });

  return (
    <div id='drum-pad' className='grid grid-cols-3 gap-2 w-max'>
      {power
        ? soundGroup.map((drumPad) => (
            <div
              className='dark:bg-black w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center rounded-lg border border-gray-400 dark:border-stone-600 shadow-md shadow-gray-400 dark:shadow-black hover:brightness-125'
              id={drumPad['audio-id']}
              key={drumPad.src}
              onClick={() => playSound(drumPad.text)}
            >
              {drumPad.text}
              <audio id={drumPad.text} className='clip' src={drumPad.src}>
                {drumPad['audio-id']}
              </audio>
            </div>
          ))
        : soundGroup.map((drumPad) => (
            <div
              className='dark:bg-black w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center rounded-lg border border-gray-400 dark:border-stone-600 shadow-md shadow-gray-400 dark:shadow-black hover:brightness-125'
              id={drumPad['audio-id']}
              key={drumPad.src}
              onClick={() => playSound(drumPad.text)}
            >
              {drumPad.text}
              <audio id={drumPad.text} className='clip' src={'#'}>
                {drumPad['audio-id']}
              </audio>
            </div>
          ))}
    </div>
  );
}
