import React, { Component } from 'react'
import { ChannelConsumer, UserConsumer } from './userContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {username => {
                    return (
                        <ChannelConsumer>
                            {channel => {
                                return (
                                    <>
                                        <h1>Child Component with context - {username}</h1>
                                        <h3>Channel is - {channel}</h3>
                                    </>
                                )
                            }}
                        </ChannelConsumer>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child