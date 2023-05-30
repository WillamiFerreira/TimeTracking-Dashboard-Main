import './styles/card.css'
import dots from '../assets/icon-ellipsis.svg'

const Card = ({current, previous, title}) => {
    return (
        <div className='card'>

            <div id="stats_bg">
                    <div className='card_name'>
                        <p>{title}</p> <img src={dots} alt="dots" />
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