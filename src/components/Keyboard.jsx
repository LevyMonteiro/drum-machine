import { useContext, useEffect } from 'react';
import { ControllerContext } from '../context/ControllerContext';

export default function Keyboard() {
  const { power, setDisplayAss, soundGroup } = useContext(ControllerContext);

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    audio.currentTime = 0;
    audio.play();

    // show the audio description on display
    setDisplayAss(power ? audio.textContent : '');

    // add animation when the drum-pad is pressed
    const drumPadElement = audio.parentNode;
    drumPadElement.classList.add('pressed');
    setTimeout(() => {
      drumPadElement.classList.remove('pressed');
    }, 100);
  };

  // track the pressed key
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    });
  });

  return (
    <div id='drum-pad' className='grid grid-cols-3 gap-2'>
      {power
        ? soundGroup.map((drumPad) => (
            <div
              className='bg-black w-24 h-24 flex justify-center items-center rounded-lg border border-stone-600 shadow-md shadow-black'
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
              className='bg-black w-24 h-24 flex justify-center items-center rounded-lg border border-stone-600 shadow-md shadow-black'
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
