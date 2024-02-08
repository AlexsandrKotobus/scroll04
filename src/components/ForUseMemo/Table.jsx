import React from 'react';

const Table = ({data}) => {
    console.log('render table')
    return (
        <table>
            <div>
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
        </div>

        </table>

    );
}

export default Table;
