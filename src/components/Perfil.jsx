import './styles/perfil.css'

import perfil from '../assets/image-jeremy.png'
import Button from './Button';

import data from '../../data.json';
import { useEffect } from 'react';


const Perfil = ({getData}) => {

    
    function GetData(e){
        getData(e)

    }

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
                <Button id='1' text='Daily' onClick={GetData} />
                <Button id='2' text='Weekly' onClick={GetData} />
                <Button id='3' text='Monthly' onClick={GetData} />
            </div>
            
        </div>
    );
};

export default Perfil;