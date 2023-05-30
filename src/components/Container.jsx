import { useState } from 'react';
import Card from './Card';
import Perfil from './Perfil';
import './styles/container.css'

import dataa from '../../data.json'

const Container = () => {

    const [data, setData] = useState({
            Exercise: {current: 1, previous: 1},
            Play: {current: 1, previous: 2},
            Self_Care: 
            {current: 0, previous: 1},
            Social: {current: 1, previous: 3},
            Study:{current: 0, previous: 1},
            Work: {current: 5, previous: 7},
        });

    function GetData(e){

        switch (e.target.id ) {
            case '1': //daily
                var daily = {}

                dataa.map(area => { //cada loop do map é um objeto diferente
                    daily[`${area.title}`] = {
                    ["current"]: area.timeframes.daily.current,
                    ["previous"]: area.timeframes.daily.previous 
                };
                })
                //console.log(daily)
                setData(daily)
                break;

            case '2':
                var weekly = {}

                dataa.map(area => {
                    weekly[`${area.title}`] = {
                        ["current"]: area.timeframes.weekly.current,
                        ["previous"]: area.timeframes.weekly.previous 
                    }
                })
                //console.log(weekly)
                setData(weekly)
                break;

            case '3':
                var monthly = {}

                dataa.map(area => {
                    monthly[`${area.title}`] = {
                        ["current"]: area.timeframes.monthly.current,
                        ["previous"]: area.timeframes.monthly.previous 
                    }
                })
                //console.log(monthly)
                setData(monthly)
                break;
                
        }

    }
    return (
        <div className={`container`}>
            <Perfil getData={GetData} />
            <div className='cards_ct'>
                <Card current={data.Work.current} previous={data.Work.previous} />
                <Card current={data.Play.current} previous={data.Play.previous}/>
                <Card current={data.Study.current} previous={data.Study.previous}/>
                <Card current={data.Exercise.current} previous={data.Exercise.previous}/>
                <Card current={data.Social.current} previous={data.Social.previous}/>
                <Card current={data.Self_Care.current} previous={data.Self_Care.previous}/>
            </div>
        </div>
    );
};

export default Container;