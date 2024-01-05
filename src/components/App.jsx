import '../index.css';
import Controller from './Controller';
import Keyboard from './Keyboard';
import Footer from './Footer';

function App() {
  return (
    <>
      <div id='drum-machine'>
        <Controller />
        <Keyboard />
      </div>
      <Footer />
    </>
  );
}

export default App;
