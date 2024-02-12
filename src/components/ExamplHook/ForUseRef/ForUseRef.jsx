import React, {useRef, useEffect} from 'react';
import Stopwatch from './Stopwatch';
import ScrollRef from './ScrollRef';
import PlayPauseRef from './playPauseRef'

const ForUseRef = () => {
    const inputRef = useRef(null);
    const handleClick =() => {
       inputRef.current.focus()
    }
    useEffect(() => {
        console.log('render')
        //useEffect без доп параметров [] - должен отрабатывать прикаждом изменении
    });
    return (
        <><div>
            <h1>Манипулирование DOM с помощью ссылки</h1>
            <div>
                <h3>1 Фокусировка текстового ввода</h3>
                <input type="text" ref={inputRef} />
                <button onClick={handleClick}> Click  </button>


            </div>
            <div>
                 <h3>2 Прокрутка изображения в режиме просмотра</h3>
                 <ScrollRef/>
            </div>
            <div>
                <p> Этот пример использует ссылку для вызова play() и pause() на DOM-узле   video  </p>
                <PlayPauseRef/>
            </div>
            
        </div>
       
        <div>
            <h1>Ссылока на значение с помощью useRef</h1>
            <h3>Секундомер</h3>
                <Stopwatch />
            </div>
            
            
        </>
        
        
        
       
        
    );
}

export default ForUseRef;
