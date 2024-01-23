import React from 'react';
import './MenuButton.css'

export const MenuButton = ({isActive, onClick}) => {
    console.log("isActive = ", isActive)
    return (
        <button 
            onClick={() => onClick()}
            className={`header__menu-button 
               ${isActive === true ? "active" : "unactive"}`}
                >
        {/* <button 
            onClick={() => onClick()}
            className={`header__menu-button 
               ${isActive === true ? "active" : ""}
               ${isActive === false ? "unactive" : ""}`}
                >*/}


                <span></span>
        </button>
        
    );
}

// export default MenuButton;
     