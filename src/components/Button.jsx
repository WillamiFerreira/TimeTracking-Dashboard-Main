import './styles/button.css'

const Button = ({text, id, onClick}) => {
    return (
        <div>
            <button id={id} onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;