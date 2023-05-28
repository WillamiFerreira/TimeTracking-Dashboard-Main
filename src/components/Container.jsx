import Perfil from './Perfil';
import './styles/container.css'

const Container = () => {
    return (
        <div className={`container`}>
            <Perfil />
            <div className='cards_ct'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div>
    );
};

export default Container;