import { useSelector, useDispatch } from 'react-redux';
import { getCurrentCountriesC } from '../../store/corona/action';
import { useEffect } from 'react';
import '../Home/Home.css';

export const Worldmeters = (props) => {

    const input = props.input.toLowerCase();

    const { currentCountriesC } = useSelector(state => { return state.covidData });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentCountriesC(input));
    }, [dispatch, input])

    return (
        <div className='Home'>

            <div className='Home-Containers Home-TotalCounterContainer'>
                <div className='Home-TotalCounter'>

                    <h1>WORLDMETERS</h1>

                    <div className='Home-Total'>

                        <div className='Home-Counter1'>
                            <span style={{ fontWeight: 'bold', fontSize: '30px' }}>{currentCountriesC.country}</span>
                            {input ?
                                <img alt='flag' src={`https://flagcdn.com/${input}.svg`} style={{ width: '70px', margin: '0 5px', borderRadius: '5px' }} /> : ''
                            }
                        </div>

                        <p>Total Cases</p>
                        <div className='Home-Counter1'><span style={{ fontWeight: 'bold' }}>{currentCountriesC.cases}</span></div>

                        <div className='Home-TotalCasesGrid'>
                            <div>
                                <p>Deaths</p>
                                <div className='Home-Counter2'><span>{currentCountriesC.deaths}</span></div>
                            </div>
                            <div>
                                <p>Recovered</p>
                                <div className='Home-Counter2'><span>{currentCountriesC.recovered}</span></div>
                            </div>
                            <div>
                                <p>Vaccinated</p>
                                <div className='Home-Counter2'><span>{/* {currentAllData.} */}</span></div>
                            </div>
                            <div>
                                <p>Active</p>
                                <div className='Home-Counter2'><span>{currentCountriesC.active}</span></div>
                            </div>
                            <div>
                                <p>Critical</p>
                                <div className='Home-Counter2'><span>{currentCountriesC.critical}</span></div>
                            </div>
                            <div>
                                <p>Tests</p>
                                <div className='Home-Counter2'><span>{currentCountriesC.tests}</span></div>
                            </div>
                        </div>

                        <p>Population</p>
                        <div className='Home-Counter1'><span>{currentCountriesC.population}</span></div>
                    </div>
                </div>
            </div>

            <div className='Home-Containers Home-OthersContainer'>

                <div className='Home-TotalCounter' style={{ marginBottom: '10px' }}>
                    <h1>Today</h1>
                    <div className='Home-Total'>
                        <p>Cases</p>
                        <div className='Home-Counter1'><span style={{ fontWeight: 'bold', }}>{currentCountriesC.todayCases}</span></div>
                        <div className='Home-TodayCasesGrid'>
                            <div>
                                <p>Deaths</p>
                                <div className='Home-Counter2'><span>{currentCountriesC.todayDeaths}</span></div>
                            </div>
                            <div>
                                <p>Recovered</p>
                                <div className='Home-Counter2'><span>{currentCountriesC.todayRecovered}</span></div>
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