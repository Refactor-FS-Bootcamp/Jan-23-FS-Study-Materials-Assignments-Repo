import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Robin Hood'
        }
        console.log('ParentComponent constructor')
    }

    greetParent = child => {
        alert(`Hello ${this.state.parentName} from ${child}`)
        this.setState({
            parentName: `Hello ${this.state.parentName} from ${child}`
        })
    }

    componentDidMount(){
        console.log('ParentComponent componentDidMount')
    }

    componentDidUpdate(){
        console.log('ParentComponent componentDidUpdate')
    }

    render() {
        console.log('ParentComponent render')
        return (
            <>
                <h1>{this.state.parentName}</h1>
                <ChildComponent greetHandler={this.greetParent} />
            </>
        )
    }
}

export default ParentComponent