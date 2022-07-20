import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
        <ul className="nav">
                <li className="nav__item"><li className="nav__link">Find your dream home</li></li>
                <li className="nav__item"><li className="nav__link">Request proposal</li></li>
                <li className="nav__item"><li className="nav__link">Download home planner</li></li>
                <li className="nav__item"><li className="nav__link">Contact us</li></li>
                <li className="nav__item"><li className="nav__link">Submit your property</li></li>
                <li className="nav__item"><li className="nav__link">Come work with us!</li></li>
        </ul>
        <p className="copyright">
            &copy; Copyright 2017 by Fatima Kerimli. Feel free to use this project for your own purposes.
        </p>
    </footer>
    );
};

export default Footer;