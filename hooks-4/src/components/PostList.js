import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(url)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div>
            {posts.map(post => <h2 key={post.id}>{post.title}</h2>)}
        </div>
    )
}

export default PostList