import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {
    const {postId}=useParams()
    const [singlePost,setSinglePost]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSinglePost(data))
    },[postId])


    return (
        <div className='postdetails'>
            <p style={{textDecoration:'underline'}}>Post Details</p>
            <p style={{margin:'5px'}}>Post Id: {postId}</p>
            <p>Title: {singlePost.title}</p>
        </div>
    );
};

export default PostDetails;