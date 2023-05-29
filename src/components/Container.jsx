import Card from './Card';
import Perfil from './Perfil';
import './styles/container.css'

const Container = () => {
    return (
        <div className={`container`}>
            <Perfil />
            <div className='cards_ct'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Container;