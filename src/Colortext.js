import './Colortext.css';

const Colortext = ({ onColorChange, onSubmit }) => {
  const colorChange = (event) => {
    onColorChange(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
        <label htmlFor="colortext">Color:</label>
        <div id="textfield">
            <input type="text" id="colorText" placeholder="Enter color" onChange={colorChange} />
            <button type="submit" id="colorSubmit">Enter</button>
        </div>

    </form>
  );
};

export default Colortext;
