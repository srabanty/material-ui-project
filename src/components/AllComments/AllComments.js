import React, { useState } from 'react';
import '../../fakeData/person'
import './AllComments.css';

const AllComments = (props) => {
    const {postId,name,email,body} = props.allComments;
    // const [person] = useState(person);
    return (
        <div className="text-left">
            <p>" {body} "</p>
            <h3 className="text-align">~ {name}</h3>
            <p className="text-align"><small>{email}</small></p>
        </div>
    );
};

export default AllComments;