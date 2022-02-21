import { useSelector, useDispatch } from 'react-redux';
import { getCurrentAll } from '../../store/corona/action';
import { useEffect } from 'react';
import '../../scss/Home/Home.css';

export const Home = () => {

    const dispatch = useDispatch();

    const { currentAll } = useSelector(state => state.covidData);

    useEffect(() => {
        dispatch(getCurrentAll());
    }, [dispatch])

    return (
        <div className='home'>

            <div className='home__conts home__totalCounterCont'>
                <div className='home__totalCounter'>

                    <h1 className='home__totalCounter--title'>WOLRD</h1>

                    <div className='home__totalCounter__total'>

                        <p className='home__totalCounter__total--subtitle'>Total Cases</p>

                        <div className='home__counter1'><span style={{ fontWeight: 'bold' }}>{currentAll.cases}</span></div>

                        <div className='home__totalCasesGrid'>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Deaths</p>
                                <div className='home__counter2'><span>{currentAll.deaths}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Recovered</p>
                                <div className='home__counter2'><span>{currentAll.recovered}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Vaccinated</p>
                                <div className='home__counter2'><span>{/* {currentAll.} */}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Active</p>
                                <div className='home__counter2'><span>{currentAll.active}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Critical</p>
                                <div className='home__counter2'><span>{currentAll.critical}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Tests</p>
                                <div className='home__counter2'><span>{currentAll.tests}</span></div>
                            </div>
                        </div>

                        <p className='home__totalCounter__total--subtitle'>Population</p>
                        <div className='home__counter1'><span>{currentAll.population}</span></div>
                    </div>
                </div>
            </div>

            <div className='home__conts home__othersCont'>
                <div className='home__totalCounter' style={{ marginBottom: '10px' }}>
                    <h1 className='home__totalCounter--title'>Today</h1>
                    <div className='home__total'>
                        <p className='home__totalCounter__total--subtitle'>Cases</p>
                        <div className='home__counter1'><span style={{ fontWeight: 'bold', }}>{currentAll.todayCases}</span></div>
                        <div className='home__todayCasesGrid'>
                            <div className='home__todayCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Deaths</p>
                                <div className='home__counter2'><span>{currentAll.todayDeaths}</span></div>
                            </div>
                            <div className='home__todayCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Recovered</p>
                                <div className='home__counter2'><span>{currentAll.todayRecovered}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__totalCounter'>

                </div>
            </div>

        </div>
    )
}