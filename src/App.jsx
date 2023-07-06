import { useState } from 'react'
import './App.css'

function App() {

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      "audio-id": "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      "audio-id": "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      "audio-id": "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      "audio-id": "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      "audio-id": "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      "audio-id": "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      "audio-id": "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      "audio-id": "Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      "audio-id": "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const playSound = (selector) => {
    const audio = document.getElementById(selector)
    audio.play()
  }

  return (
    <div id='drum-machine'>
      <div id='display'></div>
      <div className='drum-pads'>
        {drumPads.map((drumPad) => (
          <div 
            className='drum-pad' 
            id={drumPad.text} 
            key={drumPad.keyCode} 
            onClick={() => playSound(drumPad['audio-id'])}
          >
            {drumPad.text}
            <audio
              id={drumPad['audio-id']}
              className='clip'
              src={drumPad.src}
            ></audio>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App