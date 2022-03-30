import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Post.csss'
const Post = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 15)))
    }, [])
    return (
        <div>
            <h1 style={{textAlign:'center'}}>This is Posts component/page</h1>
            {
                posts.map(post =>
                    <Link style={{ color:'purple', textDecoration:'none', margin: '10px' }} key={post.id} to={`/posts/${post.id}`}>{post.id}
                    </Link>)
            }

            {/*by using Outlet PostDetails component will be showing inside Post component/page this trick is done using nested routing concept*/}
            <Outlet></Outlet>
        </div>
    );
};

export default Post;