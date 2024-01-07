import React, {useState} from 'react'
import {ReactComponent as MenuIcon} from './menuIcon.svg';
import { Transition } from 'react-transition-group';
import './App.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  // const menuRef = useRef(null); //создаем ссылку
  return (
    <div className="App">
      <header className="header">
        {/* вставляем компонент Transition, который будет срабатывать при изменении состояния isOpen */}
        {/*timeout={300} - ожидание окончания анимации  */}
        {/* и будет размонтировать меню при закрытии unmountOnExit={true}*/}
        <Transition in={isOpen} timeout={300} unmountOnExit={true}>
          {/* внутри Transition получаем state, добавляем state как дополнительный класс меню  */}
        {(state)=> <nav className={`mobile-menu ${state}`}></nav>}
        </Transition>
       
       {/* при клике по кнопке просто меняем состояние на противоположное setOpen(!isOpen) */}
        <button className='menu-button' onClick={()=> setOpen(!isOpen)} >
          <MenuIcon/>
        </button>
      </header>
    </div>
  );
}

export default App;
