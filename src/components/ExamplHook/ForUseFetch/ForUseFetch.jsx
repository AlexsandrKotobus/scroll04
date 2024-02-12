import React from 'react';
import './ForUseFetch.css'
import {UseFetch} from '../../../hooks/useFetch';

const ForUseFetch = () => {
    const {loading, data, error} = UseFetch('https://jsonplaceholder.typicode.com/posts', {})
   if( loading) return <div className='loader'>Loading ... </div>
   if(error) return <div className='error'>Loading error</div>
    return (
        <div>
            <section className="section">
                {data &&  data.length > 0 &&  data.map((item, id)=> <div className="post" key={id}>{item.title}</div> )}
            </section>
             
            

        </div>
    );
}

export default ForUseFetch;
