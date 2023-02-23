import React from 'react'

const rowstyled = {
    fontSize: '18px',
    backgroundColor: 'yellow'
}

const PostItem = ({ post }) => {
    return (
        <tr style={rowstyled}>
            <td style={{ fontWeight: '800', backgroundColor: 'lightpink' }}>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
    )
}

export default PostItem