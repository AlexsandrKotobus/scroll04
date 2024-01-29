import {useState, useEffect} from 'react';

// вспомогателная фукция mq, которая возвращает результат проверки меддиавыражения - true/false
const mq = (query) => {
    return window.matchMedia(query).matches;
}

export const useMediaQuery = (query) => {
// получаем состояние isMatches и функцию setMatshesб
// дефолтное значение получаем из функции mq()
    const [isMatches, setMatshes] = useState(mq(query));
    // ф-я update обновляет состояние после проверки медиавыражений
    const update = () => setMatshes(mq(query));
// выполняем useEffect 1 раз - 
    useEffect(()=> {
        // подписываемся на событие window "resize" и при изменении размера окна
        // выполняем update
        window.addEventListener("resize", update);
        console.log(1);
        return () => {
            // при размонтировании - удаляем подписку.
            window.removeEventListener("resize", update);
        }
    }, []);

    return isMatches;

};