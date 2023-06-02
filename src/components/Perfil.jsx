import './styles/perfil.css'
import perfil from '../assets/image-jeremy.png'
import ButtonGroup from './ButtonGroup';

const Perfil = ({getData}) => {

    function GetData(e){
        getData(e)

    }

    return (
        <div id="perfil_ct">
            <div className='perfil_bg'>
                <div id="user_info" role='User infomations'>
                    <img id="user_img" src={perfil} alt="user perfil image" />
                    <span>
                        <p>Report for</p>
                        <p id='user_name'>Jeremy Robson</p>
                    </span>
                </div>
            
                <div>
                    <ButtonGroup onClick={GetData}/>
                </div>
        </div>
            
        </div>
    );
};

export default Perfil;