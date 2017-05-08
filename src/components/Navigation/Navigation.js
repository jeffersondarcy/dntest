import React from 'react';

const Logo = () => (
    <img alt="" src="https://www.drive-now.com/assets/images/dn_logo.svg"/>
);

const Bttn = ({children}) => (
    <div className="btn">{children}</div>
);

const Navigation = () => (
    <div className="navigation">
        <div className="navigation-wrapper">
            <Logo />
            <Bttn>EN</Bttn>
            <Bttn>=</Bttn>
        </div>
    </div>
);

export default Navigation;