import { createContext, useState } from 'react';

export const ControllerContext = createContext();

export default function ControllerProvider({ children }) {
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
  const [soundGroupName, setSoundGroupName] = useState('Heater Kit');
  const [volume, setVolume] = useState(1);
  const [power, setPower] = useState(true);

  return (
    <ControllerContext.Provider
      value={{
        displayAss,
        setDisplayAss,
        soundGroup,
        setSoundGroup,
        soundGroupName,
        setSoundGroupName,
        volume,
        setVolume,
        power,
        setPower,
        firstSoundsGroup,
        secondSoundsGroup,
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
}
