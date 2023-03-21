import React, { useContext } from 'react'
import { CountContext } from '../App'

const Child1 = () => {
    const countContext = useContext(CountContext)

    return (
        <div>
            <h2>Child1 Count - {countContext.count}</h2>
            <button onClick={() => countContext.dispatch('increment')}>Increment</button>
            <button onClick={() => countContext.dispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Child1