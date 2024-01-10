import { useContext } from 'react';
import { ControllerContext } from '../context/ControllerContext';

export default function Controller() {
  const {
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
  } = useContext(ControllerContext);

  const turnPower = () => {
    const btnPower = document.querySelector('#button-power');
    setPower(!power);
    setDisplayAss('');
    // change the position of the .button
    if (power) {
      btnPower.classList.remove('flex-row-reverse');
      // setBtnPower('left');
    } else {
      btnPower.classList.add('flex-row-reverse');
      // setBtnPower('right');
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

  setAudioVolume();

  const changeSoundGroup = () => {
    const btnKitSounds = document.querySelector('#button-kit');

    if (JSON.stringify(soundGroup) === JSON.stringify(firstSoundsGroup)) {
      setSoundGroup(secondSoundsGroup);
      setSoundGroupName('Smooth Piano');
      btnKitSounds.classList.remove('flex-row-reverse');
    } else {
      setSoundGroup(firstSoundsGroup);
      setSoundGroupName('Heater');
      btnKitSounds.classList.add('flex-row-reverse');
    }
  };

  return (
    <div
      id='controller'
      className='flex flex-col justify-center items-center w-72 gap-8'
    >
      <div className='flex w-full'>
        <div
          id='button-power-wrapper'
          className='w-full flex flex-col justify-center items-center gap-2'
        >
          <h2>Power: {power ? 'ON' : 'OFF'}</h2>
          <div
            id='button-power'
            className={'w-14 bg-black p-1 flex flex-row-reverse items-center'}
            onClick={turnPower}
          >
            <div className='bg-blue-600 w-6 h-6'></div>
          </div>
        </div>

        <div
          id='button-kit-wrapper'
          className='w-full flex flex-col justify-center items-center gap-2'
        >
          <h2>{soundGroupName}</h2>
          <div
            id='button-kit'
            className={'w-14 bg-black p-1 flex flex-row-reverse items-center'}
            onClick={changeSoundGroup}
          >
            <div className='bg-blue-600 w-6 h-6'></div>
          </div>
        </div>
      </div>

      <div
        id='display'
        className='w-full h-12 bg-black px-2 py-3 text-center shadow shadow-black rounded'
      >
        {displayAss}
      </div>

      <div
        id='button-volume-wrapper'
        className='w-full flex flex-col justify-center items-center gap-2'
      >
        <h2>Volume: {Math.round(volume * 100)}%</h2>
        <input
          className='w-full outline-none'
          type='range'
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}
