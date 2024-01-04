import { useContext } from 'react';
import { ControllerContext } from '../context/ControllerContext';

export default function Controller() {
  const {
    displayAss,
    setDisplayAss,
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

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
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

  return (
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
        <div className={`button ${btnSoundsGroup}`} onClick={changeSoundGroup}>
          <div></div>
        </div>
      </div>
    </div>
  );
}
