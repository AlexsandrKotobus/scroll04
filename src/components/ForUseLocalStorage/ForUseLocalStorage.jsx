import React from 'react';
import UseLocalStarage from '../../hooks/useLocalStarage';
import '../../../src/BaseCss.css'

const ForUseLocalStorage = () => {
    const [localData, setLocalData] = UseLocalStarage('teme', 'light')
    
    return (
        <div className='App'>
            <header className='App-header'>{localData}
            <button onClick={()=> setLocalData('light')}>Light</button>
            <button onClick={()=> setLocalData('dark')}>Dark</button>
            </header>
        </div>
    );
}



export default ForUseLocalStorage;

