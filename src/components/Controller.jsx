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
      className='flex flex-col justify-center items-center m-auto w-64 sm:w-72 md:w-64 lg:w-72 gap-4 xs:gap-6 sm:gap-8'
    >
      <div className='flex w-full'>
        <div
          id='button-power-wrapper'
          className='w-full flex flex-col justify-center items-center gap-1 xs:gap-2'
        >
          <h2>Power: {power ? 'ON' : 'OFF'}</h2>
          <div
            id='button-power'
            className='w-12 xs:w-14 bg-indigo-200 dark:bg-black p-1 flex flex-row-reverse items-center'
            onClick={turnPower}
          >
            <div className='bg-blue-600 w-5 h-5 xs:w-6 xs:h-6'></div>
          </div>
        </div>

        <hr className='bg-violet-300 dark:bg-stone-600 h-14 lg:h-16 xs:w-1 font-black border-none flex my-auto' />

        <div
          id='button-kit-wrapper'
          className='w-full flex flex-col justify-center items-center gap-1 xs:gap-2'
        >
          <h2>{soundGroupName}</h2>
          <div
            id='button-kit'
            className='w-12 xs:w-14 bg-indigo-200 dark:bg-black p-1 flex flex-row-reverse items-center'
            onClick={changeSoundGroup}
          >
            <div className='bg-blue-600 w-5 h-5 xs:w-6 xs:h-6'></div>
          </div>
        </div>
      </div>

      <div
        id='display'
        className='w-full h-12 dark:bg-black px-2 py-3 text-center shadow-md shadow-gray-400 dark:shadow-black rounded'
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
