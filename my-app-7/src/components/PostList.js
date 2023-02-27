import React, { Component } from 'react'
import PostItem from './PostItem'
import './ListPost.css'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({ posts })
    }

    render() {
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
                    {this.state.posts.map(post => <PostItem key={post.id} post={post} />)}
                </tbody>
            </table>
        )
    }
}

export default PostList