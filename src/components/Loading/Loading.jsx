import React from 'react';
import './Loading.scss';
import logo from '../../assets/wolf-logo_D5.png';

export default function Loading () {
    return (
        <div className='loading'>
            <img className='loadingLogo' src={logo} alt="Logo" />
            <h1>Loading...</h1>
        </div>
    )
}