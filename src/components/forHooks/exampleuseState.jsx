import React, {useState} from 'react';


const ExampleuseState = () => {
    const [value, setValue] = useState(1);
    

    const  addValue = () => {
        setValue((value) => value + 1);
        setValue((value) => value + 1);
        setValue((value) => value + 1);
    }

    return (
        <div>
            <div>Value : {value}</div>
            {/* <div>Count : {state.count}</div> */}
            <button onClick={addValue}>add Value</button>
            
            {/* <button onClick={()=> updateState('count')}>Count</button> */}
            
        </div>
    );
}





export default ExampleuseState;
