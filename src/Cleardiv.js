import './Cleardiv.css';

const Cleardiv = ({clearColor}) => {
    const colorChange = () => {
        clearColor('');
    }
    return(
        <footer>
            <button id="clear" onClick={colorChange}>Clear</button>
        </footer>
    )
}

export default Cleardiv;
