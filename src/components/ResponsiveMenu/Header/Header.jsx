import React, {useState, useRef, useEffect} from "react";
// import { ReactComponent as Icon} from '../../../menuIcon.svg';
import  {MenuButton} from '../MenuButton/MenuButton'
import './Header.css';
import useClickOutside  from "../../../hooks/useClickOutside";


export const Header =()=> {
    const [isOpen, setOpen] = useState(false);
// useEffect - отработает только 1 раз
useEffect(() => {
    let startTouchX = 0;  //координата начала свайпа
    let endTouchX = 0;    //координата начала свайпа
    //для диагонали
    let startTouchY = 0;
    let endTouchY = 0;
    // подписываемся на событие touchstart
     document.addEventListener("touchstart", (event)=> {
        //получаем значение startTouchX  из события event
        startTouchX = event.changedTouches[0].pageX;
        startTouchY = event.changedTouches[0].pageY;
        console.log('start: ', startTouchX, startTouchY);

    });
    // координаты конца свайпа
    document.addEventListener("touchend", (event) => {
        //получаем значение endTouchX  из события event
        endTouchX = event.changedTouches[0].pageX
        endTouchY = event.changedTouches[0].pageY
        console.log('end: ', endTouchX, endTouchY);
        if(startTouchX < 100 &&
            Math.abs(startTouchY - endTouchY) < 40 &&
            endTouchX > startTouchX)
             setOpen(true);
        if(startTouchX < 440 &&
        Math.abs(startTouchY - endTouchY) < 40 &&
        endTouchX < startTouchX)
            setOpen(false);

    })
}, []);



    // создаем ссылку на элемент меню - импортируем useRef
    // и получаем menuRef
    const menuRef = useRef(null);
    //первый параметр - элемент,
    useClickOutside(menuRef, ()=> {
        //функция, закрывающая меню
        // по услови. - если сейчас оно открыто - закрыть с задержкой 50 млсек
        if(isOpen) setTimeout(() => setOpen(false), 50)
        // console.log(isOpen);
        // 1й вариант - закрывает окно при клике вне меню - но не закрывает при клике по кнопке
        // setOpen(false);

        
    });
    return (
        <div className = 'section'>
             <header className="header">
            <span className="header__logo">Logo</span>
            {/* <nav className = 'header__nav' ref={menuRef} >  */}
            <nav className={`header__nav ${isOpen ? 'active' : ''}` } ref={menuRef} >
                <ul className="header__nav-list">
                    <li className="header__nav-item">Main</li>
                    <li className="header__nav-item">About</li>
                    <li className="header__nav-item">Address</li>
                    <li className="header__nav-item">Contact</li>
                    <li className="header__nav-item">LogIn</li>
                </ul>
            </nav>
            <MenuButton isActive = {isOpen} onClick={()=> setOpen(!isOpen)} />
        </header>

        </div>
       
       
    )
}

export default Header;