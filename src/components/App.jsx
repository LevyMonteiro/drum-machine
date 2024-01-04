import { useState, useEffect, useContext } from 'react';
import '../App.css';
import { ControllerContext } from '../context/ControllerContext';

function App() {
  const [displayAss, setDisplayAss] = useState('');

  const {
    soundGroup,
    setSoundGroup,
    btnSoundsGroup,
    setBtnSoundsGroup,
    soundGroupName,
    setSoundGroupName,
    volume,
    setVolume,
    power,
    setPower,
    btnPower,
    setBtnPower,
    firstSoundsGroup,
    secondSoundsGroup,
  } = useContext(ControllerContext);

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

  const changeSoundGroup = () => {
    if (JSON.stringify(soundGroup) === JSON.stringify(firstSoundsGroup)) {
      // change the .drum-pad element with state
      setSoundGroup(secondSoundsGroup);
      // update the sounds kit name on display
      setSoundGroupName('Smooth Piano Kit');
    } else {
      setSoundGroup(firstSoundsGroup);
      setSoundGroupName('Heater Kit');
    }

    // change the position of the .button
    if (btnSoundsGroup === 'right') {
      setBtnSoundsGroup('left');
    } else {
      setBtnSoundsGroup('right');
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
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

  const turnPower = () => {
    setPower(!power);
    setDisplayAss('');
    // change the position of the .button
    if (power) {
      setBtnPower('left');
    } else {
      setBtnPower('right');
    }
  };

  setAudioVolume();

  return (
    <div id='drum-machine'>
      <div className='controller'>
        <div className='button-wrapper'>
          <h2>Power {power ? 'OFF' : 'ON'}</h2>
          <div className={`button ${btnPower}`} onClick={turnPower}>
            <div></div>
          </div>
        </div>

        <div className='button-wrapper'>
          <h2>Volume: {Math.round(volume * 100)}%</h2>
          <input
            type='range'
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <div id='display'>{displayAss}</div>
        <div className='button-wrapper'>
          <h2>{soundGroupName}</h2>
          <div
            className={`button ${btnSoundsGroup}`}
            onClick={changeSoundGroup}
          >
            <div></div>
          </div>
        </div>
      </div>

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
