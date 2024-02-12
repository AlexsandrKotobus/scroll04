import React, {useContext} from 'react';
import {ThemeContext} from '../../providers/Theme';



const Footer = () => {
    const [theme] = useContext(ThemeContext);
    return (
        <footer className={`footer footer--${theme}`}></footer>
    );
}

export default Footer;
