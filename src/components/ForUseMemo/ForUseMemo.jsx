import React, {useState} from 'react';

const ForUseMemo = () => {
    const [state, setState] = useState(1);
    const [prise, setPrise] = useState(10);
    const [count, setCount] = useState(5);
    return (
        <div>
            <p>State {state}</p>
            <p>Prise {prise}</p>
            <p>Count {count}</p>
            
        </div>
    );
}

export default ForUseMemo;
