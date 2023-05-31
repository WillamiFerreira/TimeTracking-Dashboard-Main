import './styles/button.css'

const Button = ({text, id, onClick, classn}) => {
    return (
        <div>
            <button className={classn} id={id} onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;