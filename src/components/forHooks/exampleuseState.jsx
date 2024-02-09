import React, {useState } from 'react';
import Post from "./Post"

const ExampleuseState = () => {
    const [page, setPage] = useState(1);
    const  addPage = () => {
        setPage((page) => page + 1);
    }

    return (
        <div>
            <div>Page : {page}</div>
            <button onClick={addPage}>add Value</button>
            <hr/>
            <Post page={page}></Post>
        </div>
    );
}



export default ExampleuseState;
