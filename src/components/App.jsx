import { useEffect, useContext } from 'react';
import '../App.css';
import { ControllerContext } from '../context/ControllerContext';
import Controller from './Controller';

function App() {
  const { setDisplayAss, soundGroup, volume, power } =
    useContext(ControllerContext);

  // track the pressed key
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    });
  });

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    audio.currentTime = 0;
    audio.play();

    // show the audio description on diplay
    setDisplayAss(power ? audio.textContent : '');

    // add animation when the drum-pad is pressed
    const drumPadElement = audio.parentNode;

    drumPadElement.classList.add('pressed');
    setTimeout(function () {
      drumPadElement.classList.remove('pressed');
    }, 100);
  };

  const setAudioVolume = () => {
    const audios = soundGroup.map((sound) =>
      document.getElementById(sound.text),
    );
    audios.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  setAudioVolume();

  return (
    <div id='drum-machine'>
      <Controller />
      <div className='drum-pads'>
        {power
          ? soundGroup.map((drumPad) => (
              <div
                className='drum-pad'
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
                className='drum-pad'
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
      <footer>
        by{' '}
        <a href='https://github.com/levymonteiro' target='_blank'>
          Levy Monteiro
        </a>
      </footer>
    </div>
  );
}

export default App;
