import React, { useReducer } from 'react'
import './App.css';
import DataFetching2 from './components/DataFetching2';
// import GrandParent1 from './components/GrandParent1';

// export const CountContext = React.createContext()

// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialState;
//         default:
//             return state;
//     }
// }


function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <CountContext.Provider value={{ count, dispatch }}>
        <h1>Count - {count}</h1>
        <GrandParent1 />
      </CountContext.Provider> */}
      <DataFetching2 />
    </div>
  );
}

export default App;
