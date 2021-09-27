import React from 'react';

const MyParagraph = (props) =>{
    console.log('para Running!')
    return <p>{props.children}</p>
};

export default MyParagraph;