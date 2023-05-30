import Card from './Card';
import Perfil from './Perfil';
import './styles/container.css'

const Container = () => {

    function exemplo(data){//dta é um array de objetos
        console.log('Data no pai mlk! finalmente!!')
        console.log(data.Work)
    }

    return (
        <div className={`container`}>
            <Perfil retorno={exemplo} />
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