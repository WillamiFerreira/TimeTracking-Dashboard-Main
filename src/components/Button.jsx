const Button = ({text, id}) => {
    return (
        <div>
            <button onClick={() => console.log(id)}>{text}</button>
        </div>
    );
};

export default Button;