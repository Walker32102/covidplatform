import { useSelector, useDispatch } from 'react-redux';
import { getCountryCode, getCurrentAll, getCurrentCountriesC } from '../../store/corona/action';
import { useEffect, useState } from 'react';
import '../Home/Home.css';


export const Worldmeters = (props) => {

    const input = props.input.toLowerCase();
    console.log(input);

    const dispatch = useDispatch();

    useEffect(() => {
        if (input) {
            dispatch(getCurrentCountriesC(input));
        }
    }, [input])

    const currentData = useSelector(state => state.covidData.currentCountriesC);
    console.log(currentData);

    return (
        <div className='Home'>

            <div className='Home-Containers Home-TotalCounterContainer'>
                <div className='Home-TotalCounter'>

                    <h1>WOLRDMETERS</h1>

                    <div className='Home-Total'>

                        <div className='Home-Counter1'>
                            <span style={{ fontWeight: 'bold', fontSize: '30px' }}>{currentData.country}</span>
                            {input ?
                                <img src={`https://flagcdn.com/${input}.svg`} style={{ width: '70px', margin: '0 5px', borderRadius: '5px' }} /> : ''
                            }
                        </div>

                        <p>Total Cases</p>
                        <div className='Home-Counter1'><span style={{ fontWeight: 'bold' }}>{currentData.cases}</span></div>

                        <div className='Home-TotalCasesGrid'>
                            <div>
                                <p>Deaths</p>
                                <div className='Home-Counter2'><span>{currentData.deaths}</span></div>
                            </div>
                            <div>
                                <p>Recovered</p>
                                <div className='Home-Counter2'><span>{currentData.recovered}</span></div>
                            </div>
                            <div>
                                <p>Vaccinated</p>
                                <div className='Home-Counter2'><span>{/* {currentAllData.} */}</span></div>
                            </div>
                            <div>
                                <p>Active</p>
                                <div className='Home-Counter2'><span>{currentData.active}</span></div>
                            </div>
                            <div>
                                <p>Critical</p>
                                <div className='Home-Counter2'><span>{currentData.critical}</span></div>
                            </div>
                            <div>
                                <p>Tests</p>
                                <div className='Home-Counter2'><span>{currentData.tests}</span></div>
                            </div>
                        </div>

                        <p>Population</p>
                        <div className='Home-Counter1'><span>{currentData.population}</span></div>
                    </div>
                </div>
            </div>

            <div className='Home-Containers Home-OthersContainer'>
                <div className='Home-TotalCounter' style={{ marginBottom: '10px' }}>
                    <h1>Today</h1>
                    <div className='Home-Total'>
                        <p>Cases</p>
                        <div className='Home-Counter1'><span style={{ fontWeight: 'bold', }}>{currentData.todayCases}</span></div>
                        <div className='Home-TodayCasesGrid'>
                            <div>
                                <p>Deaths</p>
                                <div className='Home-Counter2'><span>{currentData.todayDeaths}</span></div>
                            </div>
                            <div>
                                <p>Recovered</p>
                                <div className='Home-Counter2'><span>{currentData.todayRecovered}</span></div>
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