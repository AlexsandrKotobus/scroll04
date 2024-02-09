import  {useState, useEffect} from "react"

export const UseFetch  = (url, params) => {
    const [state, setState] = useState({loading: true})
   useEffect(()=> {
    fetch(url, params)
    .then((resp) => resp.json())
    .then((data) => setState({data: data}))
    .catch((error) => setState({error: error}))
   }, [url]);
    return state;
}


