import React, {useState, useEffect } from 'react';


const Post = ({page}) => {
    // сотояние postData для хранения данных поста,
    //значение по умолчанию - пустой объект
    const [postData, setPostData] = useState({})
        useEffect(() => {
        // задержка для  component did Updated
        setTimeout(()=> 
        fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
        .then((response) => response.json())
        // помещаем результат запроса в setPostData
        .then((json) => setPostData(json))
        , 500)
        
        // component did Updated
        return ()=>{
            // заменим содержимое
            setPostData({title: "...", body: "...", id: 0})
        }
    },[page]);
    

    return (
        <div>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
            <p>ID: {postData.id}</p>
        </div>
    );
}

export default Post;
