import {useState, useEffect} from 'react';

const UseLocalStarage = (key, defData) => {
    const [state, setState] = useState(()=> {
        const localData = localStorage.getItem(key);
        return localData || defData
     })
    useEffect(()=> {
        localStorage.setItem(key, state)
    }, [state]);
    return [state, setState]
}

export default UseLocalStarage;
