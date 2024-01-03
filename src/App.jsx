import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const firstSoundsGroup = [
    {
      text: 'Q',
      'audio-id': 'Heater-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      text: 'W',
      'audio-id': 'Heater-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      text: 'E',
      'audio-id': 'Heater-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      text: 'A',
      'audio-id': 'Heater-4',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      text: 'S',
      'audio-id': 'Clap',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      text: 'D',
      'audio-id': 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      text: 'Z',
      'audio-id': "Kick-n'-Hat",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      text: 'X',
      'audio-id': 'Hat',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      text: 'C',
      'audio-id': 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  const secondSoundsGroup = [
    {
      text: 'Q',
      'audio-id': 'Chord-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    },
    {
      text: 'W',
      'audio-id': 'Chord-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    },
    {
      text: 'E',
      'audio-id': 'Chord-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    },
    {
      text: 'A',
      'audio-id': 'Shaker',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    },
    {
      text: 'S',
      'audio-id': 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    },
    {
      text: 'D',
      'audio-id': 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    },
    {
      text: 'Z',
      'audio-id': 'Punchy-Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    },
    {
      text: 'X',
      'audio-id': 'Side-Stick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    },
    {
      text: 'C',
      'audio-id': 'Snare',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    },
  ];

  const [displayAss, setDisplayAss] = useState('');
  const [soundGroup, setSoundGroup] = useState(firstSoundsGroup);
  const [btnSoundsGroup, setBtnSoundsGroup] = useState('right');
  const [soundGroupName, setSoundGroupName] = useState('Heater Kit');
  const [volume, setVolume] = useState(1);
  const [power, setPower] = useState(true);
  const [btnPower, setBtnPower] = useState('right');

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
    <>
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
      </div>
      <footer>
        by{' '}
        <a href='https://github.com/levymonteiro' target='_blank'>
          Levy Monteiro
        </a>
      </footer>
    </>
  );
}

export default App;
