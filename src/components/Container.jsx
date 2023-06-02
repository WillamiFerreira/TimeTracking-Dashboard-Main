import { useState } from 'react';
import Card from './Card';
import Perfil from './Perfil';
import './styles/container.css'

import database from '../../data.json'

const Container = () => {

    const [data, setData] = useState({ //very hard coded unfortunally :(
            Exercise: {current: 1, previous: 1, title: "Exercise", period: "Day"},
            Play: {current: 1, previous: 2, title: "Play", period: "Day"},
            Self_Care:{current: 0, previous: 1, title: "Self Care", period: "Day"},
            Social: {current: 1, previous: 3, title: "Social", period: "Day"},
            Study:{current: 0, previous: 1, title: "Study", period: "Day"},
            Work: {current: 5, previous: 7, title: "Work", period: "Day"},
        });

    function btn_perso(e){
        const btns = document.getElementsByTagName('button');
        //console.log(btns)

        for (let btn of btns) {
            //console.log(btn)
            if (btn.id == e.target.id) {
                btn.classList.add('active')
            } else {
                btn.classList.remove('active')
            }
        }
        //console.log(btns)
    }

    function GetData(e){

        switch (e.target.id ) {

            case '1':
                var daily = {}
                database.map(area => {
                    daily[`${area.title}`] = {
                    ["title"]: area.title,
                    ["current"]: area.timeframes.daily.current,
                    ["previous"]: area.timeframes.daily.previous,
                    ["period"]: 'Day'
                    
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
                        ["previous"]: area.timeframes.weekly.previous,
                        ["period"]: 'Week'
                        
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
                        ["previous"]: area.timeframes.monthly.previous,
                        ["period"]: 'Month'
                    }
                })
                setData(monthly)
                break;
        }


        btn_perso(e)
    }

    
    return (
        <div className={`container`}>
                <Perfil getData={GetData} />
                <div className='cards_ct' role='Stats area'>
                    <Card
                    current={data.Work.current}
                    previous={data.Work.previous}
                    title={data.Work.title}
                    period={data.Work.period} />
                    <Card
                    current={data.Play.current}
                    previous={data.Play.previous}
                    title={data.Play.title}
                    period={data.Work.period}/>
                
                    <Card
                    current={data.Study.current}
                    previous={data.Study.previous}
                    title={data.Study.title}
                    period={data.Work.period}/>
                    <Card
                    current={data.Exercise.current}
                    previous={data.Exercise.previous}
                    title={data.Exercise.title}
                    period={data.Work.period}/>
                    <Card
                    current={data.Social.current}
                    previous={data.Social.previous}
                    title={data.Social.title}
                    period={data.Work.period}/>
                    <Card
                    current={data.Self_Care.current}
                    previous={data.Self_Care.previous}
                    title={data.Self_Care.title}
                    period={data.Work.period}/>
                </div>
        </div>
    );
};

export default Container;