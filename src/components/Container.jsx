import { useState } from 'react';
import Card from './Card';
import Perfil from './Perfil';
import './styles/container.css'

import database from '../../data.json'

const Container = () => {

    const [data, setData] = useState({ //very hard coded unfortunally :(
            Exercise: {current: 1, previous: 1, title: "Exercise"},
            Play: {current: 1, previous: 2, title: "Play"},
            Self_Care:{current: 0, previous: 1, title: "Self Care"},
            Social: {current: 1, previous: 3, title: "Social"},
            Study:{current: 0, previous: 1, title: "Study"},
            Work: {current: 5, previous: 7, title: "Work"},
        });

    function GetData(e){

        switch (e.target.id ) {

            case '1':
                var daily = {}
                database.map(area => {
                    daily[`${area.title}`] = {
                    ["current"]: area.timeframes.daily.current,
                    ["previous"]: area.timeframes.daily.previous,
                    ["title"]: area.title
                };
                })
                setData(daily)
                break;

            case '2':
                var weekly = {}
                database.map(area => {
                    weekly[`${area.title}`] = {
                        ["title"] : area.title,
                        ["current"]: area.timeframes.weekly.current,
                        ["previous"]: area.timeframes.weekly.previous 
                    }
                })
                setData(weekly)
                break;

            case '3':
                var monthly = {}
                database.map(area => {
                    monthly[`${area.title}`] = {
                        ["title"] : area.title,
                        ["current"]: area.timeframes.monthly.current,
                        ["previous"]: area.timeframes.monthly.previous 
                    }
                })
                setData(monthly)
                break;
        }


    }
    return (
        <div className={`container`}>
            <Perfil getData={GetData} />

            <div className='cards_ct'>
                <Card 
                current={data.Work.current} 
                previous={data.Work.previous} 
                title={data.Work.title} />

                <Card 
                current={data.Play.current} 
                previous={data.Play.previous} 
                title={data.Play.title}/>
                
                <Card 
                current={data.Study.current} 
                previous={data.Study.previous} 
                title={data.Study.title}/>

                <Card 
                current={data.Exercise.current} 
                previous={data.Exercise.previous} 
                title={data.Exercise.title}/>

                <Card 
                current={data.Social.current} 
                previous={data.Social.previous} 
                title={data.Social.title}/>

                <Card 
                current={data.Self_Care.current} 
                previous={data.Self_Care.previous} 
                title={data.Self_Care.title}/>
            </div>
        </div>
    );
};

export default Container;