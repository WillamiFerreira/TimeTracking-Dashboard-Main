import './styles/buttongroup.css'
import Button from "./Button";


const ButtonGroup = ({onClick}) => {
    return (
        <div id='btns'>
                <Button id='1' text='Daily' onClick={onClick} />
                <Button id='2' text='Weekly' onClick={onClick} />
                <Button id='3' text='Monthly' onClick={onClick} />
        </div>
    );
};

export default ButtonGroup;