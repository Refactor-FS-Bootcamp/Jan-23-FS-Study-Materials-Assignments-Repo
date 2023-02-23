import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            comment: '',
            language: 'swift'
        }
    }

    // handleUserChange = e => {
    //     this.setState({
    //         user: e.target.value
    //     })
    // }

    // handleCommentChange = e => {
    //     this.setState({
    //         comment: e.target.value
    //     })
    // }

    // handleLangChange = e => {
    //     this.setState({
    //         language: e.target.value
    //     })
    // }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { user, comment, language } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="user">Username </label>
                    <input type="text" id="user" value={user} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" value={comment} onChange={this.handleChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={language} onChange={this.handleChange}>
                        <option value="react">React</option>
                        <option value="flutter">Flutter</option>
                        <option value="swift">Swift</option>
                        <option value="react-native">React Native</option>
                    </select>
                </div>
                <br />
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default DemoForm