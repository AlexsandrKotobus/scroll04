import React, {useState, createContext} from 'react';

// создаем контекст 
export const ThemeContext = createContext();

// получаем джочерний компонент в виде пропс {children}
export const Theme = ({children}) => {
     //создадим состояние для хранения темы и функцию изменения темы setTheme
    const [theme, setTheme] = useState("light");
  
    return (
        //состояние темы и функцию изменения темы передаем в контекст
        <ThemeContext.Provider value ={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}
