import { useSelector, useDispatch } from 'react-redux';
import { getCurrentAll } from '../../store/corona/action';
import { useEffect } from 'react';
// import './Home.css';
import '../../scss/Home/Home.css';

export const Home = () => {

    const dispatch = useDispatch();

    const { currentAll } = useSelector(state => state.covidData);

    useEffect(() => {
        dispatch(getCurrentAll());
    }, [dispatch])

    return (
        <div className='Home'>

            <div className='Home-Containers Home-TotalCounterContainer'>
                <div className='Home-TotalCounter'>

                    <h1>WOLRD</h1>

                    <div className='Home-Total'>

                        <p>Total Cases</p>
                        <div className='Home-Counter1'><span style={{ fontWeight: 'bold' }}>{currentAll.cases}</span></div>

                        <div className='Home-TotalCasesGrid'>
                            <div>
                                <p>Deaths</p>
                                <div className='Home-Counter2'><span>{currentAll.deaths}</span></div>
                            </div>
                            <div>
                                <p>Recovered</p>
                                <div className='Home-Counter2'><span>{currentAll.recovered}</span></div>
                            </div>
                            <div>
                                <p>Vaccinated</p>
                                <div className='Home-Counter2'><span>{/* {currentAll.} */}</span></div>
                            </div>
                            <div>
                                <p>Active</p>
                                <div className='Home-Counter2'><span>{currentAll.active}</span></div>
                            </div>
                            <div>
                                <p>Critical</p>
                                <div className='Home-Counter2'><span>{currentAll.critical}</span></div>
                            </div>
                            <div>
                                <p>Tests</p>
                                <div className='Home-Counter2'><span>{currentAll.tests}</span></div>
                            </div>
                        </div>

                        <p>Population</p>
                        <div className='Home-Counter1'><span>{currentAll.population}</span></div>
                    </div>
                </div>
            </div>

            <div className='Home-Containers Home-OthersContainer'>
                <div className='Home-TotalCounter' style={{ marginBottom: '10px' }}>
                    <h1>Today</h1>
                    <div className='Home-Total'>
                        <p>Cases</p>
                        <div className='Home-Counter1'><span style={{ fontWeight: 'bold', }}>{currentAll.todayCases}</span></div>
                        <div className='Home-TodayCasesGrid'>
                            <div>
                                <p>Deaths</p>
                                <div className='Home-Counter2'><span>{currentAll.todayDeaths}</span></div>
                            </div>
                            <div>
                                <p>Recovered</p>
                                <div className='Home-Counter2'><span>{currentAll.todayRecovered}</span></div>
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