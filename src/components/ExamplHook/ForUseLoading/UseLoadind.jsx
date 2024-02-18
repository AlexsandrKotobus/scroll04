import  {useEffect} from 'react';

const UseLoading = (state) => {
    useEffect(()=> {
        if(state)document.body.classList.add("loading");

        else{
            document.body.classList.remove("loading");
            document.body.classList.add("loaded")
        }

    }, [state])
}

export default UseLoading;