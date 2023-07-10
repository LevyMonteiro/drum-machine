import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // track the pressed key
  const [keyPressed, setKeyPressed] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    })
  })

  const drumPads = [
    {
      text: "Q",
      "audio-id": "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      text: "W",
      "audio-id": "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      text: "E",
      "audio-id": "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      text: "A",
      "audio-id": "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      text: "S",
      "audio-id": "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      text: "D",
      "audio-id": "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      text: "Z",
      "audio-id": "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      text: "X",
      "audio-id": "Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      text: "C",
      "audio-id": "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const playSound = (selector) => {
    const audio = document.getElementById(selector)
    audio.play()

    // show the audio description on diplay
    setKeyPressed(audio.textContent)
  }

  return (
    <>
      <div id='drum-machine'>
        <div id='display'>
          {keyPressed}
        </div>
        <div className='drum-pads'>
          {drumPads.map((drumPad) => (
            <div 
            className='drum-pad' 
              id={drumPad['audio-id']}
              key={drumPad.src} 
              onClick={() => playSound(drumPad.text)}
            >
              {drumPad.text}
              <audio
                id={drumPad.text} 
                className='clip'
                src={drumPad.src}
                >{drumPad['audio-id']}</audio>
            </div>
          ))}
        </div>
      </div>
      <footer>by <a href="https://github.com/levymonteiro" target='_blank'>Levy Monteiro</a></footer>
    </>
  )
}

export default App