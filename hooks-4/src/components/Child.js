import React from 'react'
import { ChannelContext, UserContext } from '../App'

const Child = () => {
    return (
        <UserContext.Consumer>
        {username => {
            return (
                <ChannelContext.Consumer>
                    {channel => {
                        return (
                            <>
                                <h1>Child Component with context - {username}</h1>
                                <h3>Channel is - {channel}</h3>
                            </>
                        )
                    }}
                </ChannelContext.Consumer>
            )
        }}
    </UserContext.Consumer>
    )
}

export default Child