import React, {useContext} from 'react';
import {ThemeContext} from '../../../providers/Theme';



const Main = () => {
    const [theme] = useContext(ThemeContext);
    // console.log("them main", theme)
    return (
        
             <main className={`main main--${theme}`}>main</main>
        
    );
}

export default Main;
