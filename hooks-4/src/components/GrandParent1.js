import React, { useContext } from 'react'
import { CountContext } from '../App'
import Parent1 from './Parent1'

const GrandParent1 = () => {
    const countContext = useContext(CountContext)

    return (
        <div>
            <h2>GrandParent1 Count - {countContext.count}</h2>
            <Parent1 />
        </div>
    )
}

export default GrandParent1