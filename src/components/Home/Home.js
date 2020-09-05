import React, { useState, useEffect } from 'react';
import './Home.css';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=> setPosts(data))
    },[])
    return (
        <div className="home">
            <div>
                <h1 className="header-text">Total Post : {posts.length}</h1>
                {
                    posts.map(post =><Post post={post}></Post>)
                }    
            </div>
        </div>
    );
};

export default Home;