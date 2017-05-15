import React from 'react';
import LanguageToggler from './LanguageToggler';

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
            <div className="buttons">
            <Bttn><LanguageToggler /></Bttn>
            <Bttn>=</Bttn>
            </div>
        </div>
    </div>
);

export default Navigation;