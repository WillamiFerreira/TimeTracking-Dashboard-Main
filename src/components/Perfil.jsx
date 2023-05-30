import './styles/perfil.css'

import perfil from '../assets/image-jeremy.png'
import Button from './Button';

import data from '../../data.json';


const Perfil = ({retorno}) => {


    function GetData(e){

        switch (e.target.id) {
            case '1': //daily
                var daily = {}

                data.map(area => { //cada loop do map é um objeto diferente
                    daily[`${area.title}`] = {
                    ["current"]: area.timeframes.daily.current,
                    ["previous"]: area.timeframes.daily.previous 
                };
                })
                //console.log(daily)
                retorno(daily)
                break;

            case '2':
                var weekly = {}

                data.map(area => {
                    weekly[`${area.title}`] = {
                        ["current"]: area.timeframes.weekly.current,
                        ["previous"]: area.timeframes.weekly.previous 
                    }
                })
                //console.log(weekly)
                retorno(weekly)
                break;

            case '3':
                var monthly = {}

                data.map(area => {
                    monthly[`${area.title}`] = {
                        ["current"]: area.timeframes.monthly.current,
                        ["previous"]: area.timeframes.monthly.previous 
                    }
                })
                //console.log(monthly)
                retorno(monthly)
                break;
        }

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