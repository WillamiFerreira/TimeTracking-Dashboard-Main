import './styles/card.css'

const Card = ({current, previous}) => {
    return (
        <div className='card'>
            <div id="stats_bg">
                    <div className='card_name'>
                        <p>Work</p> <p>...</p>
                    </div>
                    <div className='stats'>
                        <p>{current}hrs</p>
                        <p>Last Week - {previous}hrs</p>
                    </div>   
            </div>
        </div>
    );
};

export default Card;