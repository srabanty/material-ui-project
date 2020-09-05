import React from 'react';
import './SinglePerson.css'
const SinglePerson = (props) => {
    return (
        <div>
            <img src={props.singlePerson.img} alt="abc"/>
        </div>
    );
};

export default SinglePerson;