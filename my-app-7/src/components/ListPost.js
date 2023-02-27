import React from 'react'
import PostItem from './PostItem'
import './ListPost.css'

const ListPost = () => {
    const posts = [
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum "
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis "
        },
        {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quist"
        }
    ]

    const PostHelper = () => posts.map(post => <PostItem key={post.id} post={post} />)

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody className='tbody-style'>
                <PostHelper />
            </tbody>
        </table>
    )
}

export default ListPost