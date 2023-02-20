import React from 'react'

const PostItem = ({ post }) => {
    return (
        <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
    )
}

export default PostItem