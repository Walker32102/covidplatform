import '../App.css'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import logo from '../assets/img/corona.png'
import { ReactComponent as SearchLogo } from '../assets/svg/search.svg'
import { Home } from './components';
import { useState } from 'react';

export const Router = () => {

    const [searchInput, setSearchInput] = useState('');

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <BrowserRouter>
                <header>

                    <div className='header-section sections'>
                        <Link className='section-links' style={{ fontWeight: 'bold' }} to='/'>Home</Link>
                        <Link className='section-links' to='/wolrdmeters'>Worldmeters</Link>
                    </div>

                    <div className='header-section searchBar'>
                        <div className='searchInputContainer'>
                            <SearchLogo width='35' className='searchLogo' />
                            <input placeholder='Search' onChange={(e) => setSearchInput(e.target.value)} />
                        </div>
                    </div>

                    <div className='header-section logoContainer'>
                        <span>CovidPlatform</span>
                        <img src={logo} width='50' />
                    </div>

                </header>

                <Routes>
                    <Route path='/' exact element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}