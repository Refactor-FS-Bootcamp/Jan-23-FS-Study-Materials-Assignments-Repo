import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings);
        const data = await res.json();
        console.log(data);
    }


    render() {
        const { userId, title, body } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="userId">Username </label>
                    <input type="text" id="userId" value={userId} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="title">Title </label>
                    <input type="text" id="title" value={title} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body </label>
                    <textarea id="body" value={body} onChange={this.handleChange}></textarea>
                </div>
                <br />
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default PostForm