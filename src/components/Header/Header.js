import React from 'react';
import '../../scss/Header/Header.css'
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/img/corona.png';
import { ReactComponent as SearchLogo } from '../../assets/svg/search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {

    let onChange = props.onChange

    return (
        <div className='header__section header__searchBar'>
            <div className='header__searchBar--searchCont'>
                <SearchLogo width='35' className='header__searchBar--searchLogo' />
                <input placeholder='Search' className='header__searchBar--searchInput' onChange={onChange} />
            </div>
        </div>
    )
}

export const Header = (props) => {

    let onChange = props.onChange

    const pathname = useLocation().pathname;

    return (
        <header className='header'>

            <div className='header__section header__sections'>
                <Link className='header__sections--links' style={{ fontWeight: 'bold' }} to='/'>Home</Link>
                <Link className='header__sections--links' to='/worldmeters'>Worldmeters</Link>
            </div>

            <div className='header__section header__optionsMenu'>
                <FontAwesomeIcon icon={faBars} className='header__optionsMenu--menuIcon' />

                <div className='header__submenu'>

                    <div className='header__submenu--titleCont'>
                        <span className='header__submenu--title'>CovidPlatform</span>
                        <img alt='logo' src={logo} width='50' />
                    </div>

                    <div className='header__submenu--linksCont'>
                        <Link className='header__submenu--links' to='/'>Home</Link>
                        <Link className='header__submenu--links' to='/worldmeters'>Worldmeters</Link>
                    </div>

                </div>

            </div>

            {pathname === '/worldmeters' ?
                <Search
                    onChange={onChange}
                /> :
                ''}

            <div className='header__section header__logoContainer'>
                <span className='header__logoContainer--title'>CovidPlatform</span>
                <img alt='logo' src={logo} width='50' />
            </div>

        </header>
    )
};
