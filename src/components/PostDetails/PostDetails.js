import React, { useState, useEffect } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import PostComments from '../postComments/PostComments';

const PostDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [post, setPost] = useState({});
    console.log(post);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data => setPost(data))
    },[])
    return (
           <Container>
               <h1 className="text-highlight">Details of Post : {id}</h1>
               <div className="postDetail">
                    
                    <h2>~ Post Title ~<br/><span>" {post.title} "</span></h2>
                    <p><strong>~ Post Details ~</strong><br/><span>{post.body}</span></p>
               </div>
               <h1 className="text-highlight">Some comments of your Post</h1>
                <PostComments postId={id}></PostComments>
           </Container>
    );
};

export default PostDetails;