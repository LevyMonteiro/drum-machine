import '../App.css';
import Controller from './Controller';
import Keyboard from './Keyboard';

function App() {
  return (
    <div id='drum-machine'>
      <Controller />
      <Keyboard />
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
