import React, { useEffect } from "react";

// функция принимает ссылку на элемент - ref, и функцию callback,
// которую нужно выполнить
const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    // мы плодписываемся на событие mousedown в любой части документа 
    // при каждом событии получаем элемент и сравниваем его с React-элементом  
    // есди клик был совершен вне React-элемента, выполняется callback-функция
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export  default useClickOutside
