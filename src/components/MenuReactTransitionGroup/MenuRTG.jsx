import React, {useState} from 'react';
import { ReactComponent as MenuIcon } from '../../menuIcon.svg';
import { Transition } from 'react-transition-group';
import './MenuRTG.css';

function MenuRTG() {
    const [isOpen, setOpen] = useState();
    return (<header className='header'>
        <Transition in={isOpen} timeout={300}>
            {(state)=> (
                <nav className={`menu menu--${state}`}>
                <ul className='menu__list'>
                    <li className='menu__item'>About us</li>
                    <li className='menu__item'>Product</li>
                    <li className='menu__item'>Contact</li>
                </ul>
            </nav>
            )}
        </Transition>
        
        <button className="menu-button" onClick={()=> setOpen(!isOpen)}>
            <MenuIcon/></button>



    </header>

    );
}

export default MenuRTG;
