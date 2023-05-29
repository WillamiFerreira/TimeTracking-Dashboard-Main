import './styles/perfil.css'

import perfil from '../assets/image-jeremy.png'
import Button from './Button';


const Perfil = () => {
    return (
        <div className='perfil_bg'>
            <div id="user_info">
                <img id="user_img" src={perfil} alt="user perfil image" />
                <span>
                    <p>Report for</p>
                    <p id='user_name'>Jeremy Robson</p>
                </span>
            </div>
            <div id='btns'>
                <Button id='1' text='Daily' />
                <Button id='2' text='Weekly' />
                <Button id='3' text='Monthly' />
            </div>
            
        </div>
    );
};

export default Perfil;