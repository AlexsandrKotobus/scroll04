import React, {useEffect, useState} from 'react';
import UseLoadind from './UseLoadind';
import './ForUseLoading.css'


const ForUseLoading = () => {
    // начальное сотояние - true
    const [loading, setLoading] = useState(true);
    //передаем состояние в UseLoadind
    UseLoadind(loading);
    // имитируем загрузку тяжелых данных
    useEffect(()=> {
        //Load some big data
        setTimeout(() => setLoading(false), 3000);
    }, []);
    return(
        <section>
            <h1>Page Title</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, perspiciatis esse temporibus laborum sint, rerum aliquam incidunt minima provident enim eos officia sunt explicabo dolore quas quaerat saepe inventore architecto!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore porro sunt deleniti quae dolorem laudantium veniam perspiciatis molestiae, atque hic eveniet necessitatibus dolorum velit mollitia iste assumenda eligendi ea voluptates
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam itaque, consequatur repellendus tempora cum enim doloremque quis id tenetur alias ducimus laudantium libero minus quos, quia aliquam dignissimos eligendi, possimus tempore ipsum eos ipsa. Voluptatem ea perferendis iusto saepe!
            </p>
        </section>
    )
}

export default ForUseLoading;
