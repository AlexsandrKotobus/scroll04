import React, {useState, memo} from 'react';


const Table = memo(({data}) => {
    console.log('render table')
    return (
        <table>
            <tbody>
                {data &&
                data.map((item, id) => {
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{item}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
});





const ForUseMemo = () => {
    const [state, setState] = useState(1);
    const [data, setData] = useState([10, 20, 30]);


    return (
        <div>
            <p>State {state}</p>
            <button onClick={() => {setState(state + 1)}}> Update state</button>
            <button onClick={() => {setData([...data, (data.length + 1)*10])}}> Update data</button>
            <Table data = {data}/>
            
        </div>
    );
}

export default ForUseMemo;
