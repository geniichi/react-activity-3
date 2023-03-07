import './App.css';
import Header from './Header.js';
import Colortext from './Colortext.js';
import Colordiv from './Colordiv.js';
import Cleardiv from './Cleardiv.js';
import { useState } from 'react';

const App = () => {
  const [textColorInput, setTextColorInput] = useState('');
  const [textColor, setTextColor] = useState('');

  const handleColorChange = (color) => {
    setTextColorInput(color);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextColor(textColorInput);
  };

  return (
    <main id="container">
      <Header />
      <Colortext
        onColorChange={handleColorChange}
        onSubmit={handleSubmit} // pass the handleSubmit function as a prop to the Colortext component
      />
      <Colordiv textColor={textColor} />
      <Cleardiv clearColor={setTextColor}/>
    </main>
  );
};

export default App;
