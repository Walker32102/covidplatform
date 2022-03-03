import '../App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Worldmeters } from './components';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { Header } from './Header/Header';
import '../scss/Router/Router.css'

export const Router = () => {

    const [searchInput, setSearchInput] = useState('');
    const [code, setCode] = useState('');

    const saveDebounce = useCallback(
        debounce((value) => setSearchInput(value), 500)
    )

    const onHandleChange = (e) => {
        saveDebounce(e)
    }

    const getCountryCode = async () => {
        const countryNameData = await axios.get(`https://restcountries.com/v3/name/${searchInput}`);
        try {
            return countryNameData.data[0].cca2;
        } catch (e) {
            document.title = `Covid Platform`
        }
        return null;
    }

    useEffect(() => {
        if (searchInput) {
            getCountryCode().then(res => setCode(res));
        }
    })

    return (
        <div className='router'>
            <BrowserRouter>

                {/* <Header onChange={(e) => { onHandleChange(e.target.value) }} /> */}

                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/worldmeters' exact element={<Worldmeters input={code} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}