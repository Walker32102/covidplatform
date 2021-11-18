import { useSelector, useDispatch } from 'react-redux';
import { getCurrentAll } from '../../store/corona/action';
import { useEffect, useState } from 'react';
import './Home.css';

export const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentAll());
    }, [])

    const currentAllData = useSelector(state => state.covidData.currentAll);
    console.log(currentAllData);

    return (
        <div className='Home'>

            <div className='Home-Containers Home-TotalCounterContainer'>
                <div className='Home-TotalCounter'>

                    <h1>WOLRD</h1>

                    <div className='Home-Total'>

                        <p>Total Cases</p>
                        <div className='Home-Counter1'><span style={{ fontWeight: 'bold' }}>{currentAllData.cases}</span></div>

                        <div className='Home-TotalCasesGrid'>
                            <div>
                                <p>Deaths</p>
                                <div className='Home-Counter2'><span>{currentAllData.deaths}</span></div>
                            </div>
                            <div>
                                <p>Recovered</p>
                                <div className='Home-Counter2'><span>{currentAllData.recovered}</span></div>
                            </div>
                            <div>
                                <p>Vaccinated</p>
                                <div className='Home-Counter2'><span>{/* {currentAllData.} */}</span></div>
                            </div>
                            <div>
                                <p>Active</p>
                                <div className='Home-Counter2'><span>{currentAllData.active}</span></div>
                            </div>
                            <div>
                                <p>Critical</p>
                                <div className='Home-Counter2'><span>{currentAllData.critical}</span></div>
                            </div>
                            <div>
                                <p>Tests</p>
                                <div className='Home-Counter2'><span>{currentAllData.tests}</span></div>
                            </div>
                        </div>

                        <p>Population</p>
                        <div className='Home-Counter1'><span>{currentAllData.population}</span></div>
                    </div>
                </div>
            </div>

            <div className='Home-Containers Home-OthersContainer'>
                <div className='Home-TotalCounter' style={{ marginBottom: '10px' }}>
                    <h1>Today</h1>
                    <div className='Home-Total'>
                        <p>Cases</p>
                        <div className='Home-Counter1'><span style={{ fontWeight: 'bold', }}>{currentAllData.todayCases}</span></div>
                        <div className='Home-TodayCasesGrid'>
                            <div>
                                <p>Deaths</p>
                                <div className='Home-Counter2'><span>{currentAllData.todayDeaths}</span></div>
                            </div>
                            <div>
                                <p>Recovered</p>
                                <div className='Home-Counter2'><span>{currentAllData.todayRecovered}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Home-TotalCounter'>

                </div>
            </div>

        </div>
    )
}