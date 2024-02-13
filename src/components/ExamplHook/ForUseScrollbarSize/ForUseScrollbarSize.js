import  {useState, useRef, useEffect} from 'react';

// МОЕ
const ForUseScrollbarSize = () => {
    const [size, setSize] = useState({width: 0, height: 0});
    const elementRef = useRef(null);
    console.log("Before check", size);

    useEffect(()=> {
        elementRef.current = document.createElement("div");
        elementRef.current.className="QQQ";
        elementRef.current.style.width = "100px";
        elementRef.current.style.height = "100px";
        elementRef.current.style.overflow = "scroll";
        elementRef.current.style.position = "absolute";
        // я изменила .style.top = "-9999px" на 9999 
        elementRef.current.style.top = "9999px";
        document.body.appendChild(elementRef.current);

        const{offsetWidth, clientWidth, offsetHeight, clientHeight} =
            elementRef.current;
            const width = offsetWidth - clientWidth;
            const height = offsetHeight - clientHeight;

            
            setSize({width, height});
            // если удалить removeChild элемент останется
            document.body.removeChild(elementRef.current);
            console.log("After check", { width, height });

        },[]);


    return size;
    }
export default ForUseScrollbarSize;
