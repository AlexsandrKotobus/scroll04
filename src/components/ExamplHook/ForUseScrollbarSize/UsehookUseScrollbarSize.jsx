import React, { useState } from 'react';
import ForUseScrollbarSize from './ForUseScrollbarSize';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const UsehookUseScrollbarSize = () => {
    const [count, setCount] = useState(0);
    const {width, height} = ForUseScrollbarSize();
    
    return (
    <>
        <div>    
            <a href="https://vitejs.dev" target="_blank">  <img src={viteLogo} className="logo" alt="Vite logo" />  </a>
            <a href="https://react.dev" target="_blank"> <img src={reactLogo} className="logo react" alt="React logo" /> </a>
        
        </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
            <p>Ширина скроллбара: {width}</p>
            <p>Высота скроллбара: {height}</p>
            
        </div>
            <p className="read-the-docs">
            Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default UsehookUseScrollbarSize;
