import '../index.css';
import Controller from './Controller';
import Keyboard from './Keyboard';
import Footer from './Footer';

function App() {
  return (
    <div
      id='wrapper'
      className='dark:bg-neutral-700 w-screen h-screen flex flex-col justify-center items-center'
    >
      <div
        id='app'
        className='dark:text-white dark:bg-neutral-900 flex flex-row-reverse gap-8 p-8 rounded-xl'
      >
        <Controller />
        <Keyboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
