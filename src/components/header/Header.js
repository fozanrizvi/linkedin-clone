import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

import LinkedIn_logo from '../../images/LinkedIn_logo.png';
import fozan_rizvi from '../../images/fozan_rizvi.jpeg';
import SearchIcon from '@mui/icons-material/Search';
import Home from '@mui/icons-material/Home';
import { BusinessCenter, Chat, Notifications, SupervisorAccount } from '@mui/icons-material';


function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={LinkedIn_logo} alt="" />

                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={Home} title='Home' />
                <HeaderOption Icon={SupervisorAccount} title='My Network' />
                <HeaderOption Icon={BusinessCenter} title='Jobs' />
                <HeaderOption Icon={Chat} title='Chat' />
                <HeaderOption Icon={Notifications} title='Notifications' />
                <HeaderOption avatar={fozan_rizvi} title='Me' />
            </div>
        </div>
    )
}

export default Header