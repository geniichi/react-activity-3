import './Colordiv.css';

const Colordiv = ({ textColor }) => {
    return(
        <div id="color-container" style={{ backgroundColor: textColor }}>
            <div id="colorTextoutput">
                {textColor.toUpperCase()}
            </div>
        </div>
    )
  };

export default Colordiv;
