import  {useEffect} from 'react';
// state - состояние из родительского компонента
const UseLoading = (state) => {
    useEffect(()=> {
        // если state - true добавляет к body класс "loading"
        if(state)document.body.classList.add("loading");

        else{
            //если state=false удалеяем класс loading и добавляем loaded
            document.body.classList.remove("loading");
            document.body.classList.add("loaded")
        }
// useEffect выполняяяется только при изменении состояния
    }, [state])
}

export default UseLoading;