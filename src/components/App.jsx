import '../index.css';
import Controller from './Controller';
import Keyboard from './Keyboard';
import Footer from './Footer';

function App() {
  return (
    <div
      id='body'
      className='overflow-hidden bg-indigo-100 bg-opacity-75 dark:bg-neutral-700 w-screen h-screen flex flex-col justify-center items-center'
    >
      <div
        id='app'
        className='dark:text-white bg-white dark:bg-neutral-900 flex flex-col md:flex-row-reverse px-4 py-6 gap-4 xs:gap-6 sm:gap-8 xs:p-7 sm:p-8 rounded-xl shadow-2xl dark:shadow-gray-900'
      >
        <Controller />
        <Keyboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
