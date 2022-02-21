import { useSelector, useDispatch } from 'react-redux';
import { getCurrentCountriesC } from '../../store/corona/action';
import { useEffect } from 'react';
import '../../scss/Home/Home.css'

export const Worldmeters = (props) => {

    const input = props.input.toLowerCase();

    const { currentCountriesC } = useSelector(state => { return state.covidData });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentCountriesC(input));
    }, [dispatch, input])

    return (
        <div className='home'>

            <div className='home__conts home__totalCounterCont'>
                <div className='home__totalCounter'>

                    <h1 className='home__totalCounter--title'>WORLDMETERS</h1>

                    <div className='home__totalCounter__total'>

                        <div className='home__counter1'>
                            <span style={{ fontWeight: 'bold', fontSize: '30px' }}>{currentCountriesC.country}</span>
                            {input ?
                                <img alt='flag' src={`https://flagcdn.com/${input}.svg`} style={{ width: '70px', margin: '0 5px', borderRadius: '5px' }} /> : ''
                            }
                        </div>

                        <p className='home__totalCounter__total--subtitle'>Total Cases</p>
                        <div className='home__counter1'><span style={{ fontWeight: 'bold' }}>{currentCountriesC.cases}</span></div>

                        <div className='home__totalCasesGrid'>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Deaths</p>
                                <div className='home__counter2'><span>{currentCountriesC.deaths}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Recovered</p>
                                <div className='home__counter2'><span>{currentCountriesC.recovered}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Vaccinated</p>
                                <div className='home__counter2'><span>{/* {currentAllData.} */}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Active</p>
                                <div className='home__counter2'><span>{currentCountriesC.active}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Critical</p>
                                <div className='home__counter2'><span>{currentCountriesC.critical}</span></div>
                            </div>
                            <div className='home__totalCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Tests</p>
                                <div className='home__counter2'><span>{currentCountriesC.tests}</span></div>
                            </div>
                        </div>

                        <p className='home__totalCounter__total--subtitle'>Population</p>
                        <div className='home__counter1'><span>{currentCountriesC.population}</span></div>
                    </div>
                </div>
            </div>

            <div className='home__conts home__othersCont'>

                <div className='home__totalCounter' style={{ marginBottom: '10px' }}>
                    <h1 className='home__totalCounter--title'>Today</h1>
                    <div className='home__total'>
                        <p className='home__totalCounter__total--subtitle'>Cases</p>
                        <div className='home__counter1'><span style={{ fontWeight: 'bold', }}>{currentCountriesC.todayCases}</span></div>
                        <div className='home__todayCasesGrid'>
                            <div className='home__todayCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Deaths</p>
                                <div className='home__counter2'><span>{currentCountriesC.todayDeaths}</span></div>
                            </div>
                            <div className='home__todayCasesGrid--cont'>
                                <p className='home__counter1--subtitle'>Recovered</p>
                                <div className='home__counter2'><span>{currentCountriesC.todayRecovered}</span></div>
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