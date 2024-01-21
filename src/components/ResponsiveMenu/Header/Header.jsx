import React, {useState, useRef } from "react";
import { ReactComponent as Icon} from '../../../menuIcon.svg';
import './Header.css';
import useClickOutside  from "../../../hooks/useClickOutside";


export const Header =()=> {
    const [isOpen, setOpen] = useState(false)
    const menuRef = useRef(null);
    useClickOutside(menuRef, ()=> {
        //функция, звкрывающая меню
        // по услови. - если сейчас оно открыто - закрыть с задержкой 50 млсек
        if(setOpen) setTimeout(() => setOpen(false), 50)

        
    });
    return (
        <header className="header">
            <span className="header__logo">Logo</span>
            <nav className={`header__nav ${isOpen ? 'active' : ''}` } ref={menuRef} >
                <ul className="header__nav-list">
                    <li className="header__nav-item">Main</li>
                    <li className="header__nav-item">About</li>
                    <li className="header__nav-item">Address</li>
                    <li className="header__nav-item">Contact</li>
                    <li className="header__nav-item">LogIn</li>
                </ul>
            </nav>
            <button className="header__menu-button" onClick={()=> setOpen(!isOpen)}><Icon/></button>
           
        </header>
       
    )
}

export default Header;