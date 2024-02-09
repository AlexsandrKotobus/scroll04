import React from 'react';
import './Table.css'

const Table = ({data}) => {
    console.log('render table')
    return (
        <table >
            <div>
            <tbody className='tabl'>
                {data &&
                data.map((item, id) => {
                    return (
                        <tr key={id} className='tr'>
                            <td>{id}</td>
                            <td>{item}</td>
                        </tr>
                        
                    );
                })}
            </tbody>
        </div>

        </table>

    );
}

export default Table;
