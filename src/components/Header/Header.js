import React from 'react';
import '../../App.css'
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/img/corona.png';
import { ReactComponent as SearchLogo } from '../../assets/svg/search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {

    let onChange = props.onChange

    return (
        <div className='header-section searchBar'>
            <div className='searchInputContainer'>
                <SearchLogo width='35' className='searchLogo' />
                <input placeholder='Search' onChange={onChange} />
            </div>
        </div>
    )
}

export const Header = (props) => {

    let onChange = props.onChange

    const pathname = useLocation().pathname;

    return (
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

            {pathname === '/worldmeters' ?
                <Search
                    onChange={onChange}
                /> :
                ''}

            <div className='header-section logoContainer'>
                <span>CovidPlatform</span>
                <img alt='logo' src={logo} width='50' />
            </div>

        </header>
    )
};
