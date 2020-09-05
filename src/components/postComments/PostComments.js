import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllComments from '../AllComments/AllComments';
import person from '../../fakeData/person';
import SinglePerson from '../SinglePerson/SinglePerson';
import './PostComments.css';
import { Container } from '@material-ui/core';

const PostComments = (props) => {
    const postId = props.postId;
    console.log(props.postId);
    const [postDetails, setPostDetails] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data => setPostDetails(data))
    },[])
    return (
        <Container>
            <div className="single-post">
                <div className="aligning-items">
                    {
                        person.map(singlePerson => <SinglePerson singlePerson={singlePerson}></SinglePerson>)
                    }
                </div>
                <div>
                    {
                        postDetails.map(pd=> <AllComments allComments ={pd} ></AllComments>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default PostComments;