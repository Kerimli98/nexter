import React from 'react';

const Header = () => {
    return (
        <header className="header">
        <img src="assets/img/logo.png" alt="Nexter logo" className="header__logo"/>
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
            <img src="assets/img/logo-bbc.png" alt="Seen on logo 1"/>
            <img src="assets/img/logo-forbes.png" alt="Seen on logo 2"/>
            <img src="assets/img/logo-techcrunch.png" alt="Seen on logo 3"/>
            <img src="assets/img/logo-bi.png" alt="Seen on logo 4"/>
        </div>
    </header>
    );
};

export default Header;