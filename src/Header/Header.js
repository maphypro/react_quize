import React from 'react';
import './Header.scss';
import logo from './logo.png';

const Header = (props) => {
    return (
        <header className={'header'}>
            <img className={'header_logo'}
                 src={logo}
                 alt="random text"
            />
        </header>
    )
}

export default Header;
