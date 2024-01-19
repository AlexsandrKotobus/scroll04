import React from "react";
import './Checkbox.css'

export const Checkbox = ({isChecked, onChange, children}) => {
    console.log(isChecked);     console.log(onChange);     console.log(children);

    return (
    <label className="checkbox-wrapper">
        <input 
        type="checkbox" 
        className="checkbox-element"
        checked={isChecked}
        // eslint-disable-next-line no-undef
        // onChange={()=> onChange((prev)=!prev)}
        onChange={()=> onChange(console.log(1000))}
         />
        <p>{children}</p>
        
    </label>
    );
}