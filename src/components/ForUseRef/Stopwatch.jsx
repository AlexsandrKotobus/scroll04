import React, {useState, useRef} from 'react';

const Stopwatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    
    function handleStart(){
        setStartTime(Date.now)
        setNow(Date.now())
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(()=> {
        setNow(Date.now)
    }, 10);
}
    function handleStop()
{
    clearInterval(intervalRef.current);
    // let time = (new Date(now));
    console.log((new Date(now)).toString(new Date(now)))
    console.log((new Date(startTime)).toString(new Date(startTime)))
}

let secondPassed = 0;
if(startTime !== null && now !==0){
secondPassed = (now - startTime) /1000;


// console.log(now)
// console.log(startTime)

}

    return (
        <div>
            <h1>Time passed: {secondPassed.toFixed(3)}</h1>
            <button onClick={handleStart}> START </button>
            <button onClick={handleStop}> STOP </button>
            
        </div>
    );
}

export default Stopwatch;
