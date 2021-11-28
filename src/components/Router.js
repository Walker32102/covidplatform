import '../App.css'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import logo from '../assets/img/corona.png';
import { ReactComponent as SearchLogo } from '../assets/svg/search.svg';
import { Home, Worldmeters } from './components';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Router = () => {

    const [searchInput, setSearchInput] = useState('');
    const [code, setCode] = useState('');

    const getCountryCode = async () => {
        const countryNameData = await axios.get(`https://restcountries.com/v3/name/${searchInput}`);
        try {
            return countryNameData.data[0].cca2;
        } catch (e) {
            console.log(e);
            document.title = `Covid Platform`
        }
        return null;
    }

    const saveDebounce = useCallback(
        debounce((value) => setSearchInput(value), 500)
    )

    const onHandleChange = (e) => {
        saveDebounce(e)
    }

    useEffect(() => {
        if (searchInput) {
            getCountryCode().then(res => setCode(res));
        }
    }, [searchInput])

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <BrowserRouter>
                <header>

                    <div className='header-section sections'>
                        <Link className='section-links' style={{ fontWeight: 'bold' }} to='/'>Home</Link>
                        <Link className='section-links' to='/worldmeters'>Worldmeters</Link>
                    </div>

                    <div className='header-section optionsMenu'>
                        <FontAwesomeIcon icon={faBars} className='burgerMenuIcon' />
                        <div className='header-submenu'>

                        </div>
                    </div>

                    <div className='header-section searchBar'>
                        <div className='searchInputContainer'>
                            <SearchLogo width='35' className='searchLogo' />
                            <input placeholder='Search' onChange={(e) => onHandleChange(e.target.value)} />
                        </div>
                    </div>

                    <div className='header-section logoContainer'>
                        <span>CovidPlatform</span>
                        <img src={logo} width='50' />
                    </div>

                </header>

                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/worldmeters' exact element={<Worldmeters input={code} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}