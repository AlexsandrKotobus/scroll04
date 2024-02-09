import React, {useContext} from 'react';
import {ThemeContext} from '../../providers/Theme';


const Header = () => {
    // 
    const [theme, setTheme] = useContext(ThemeContext);
    console.log("them", theme);
const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
}

    return (
        // вставляем theme в модификатор класса, получаем темную тему header
            <header className={`header header--${theme}`}>
                <button className='button' onClick={changeTheme}>{theme} </button>
            </header>
            
    );
}

export default Header;
