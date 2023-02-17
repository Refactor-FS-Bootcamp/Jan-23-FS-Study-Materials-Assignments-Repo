import './App.css';
// import Counter from './components/Counter';
// import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greeting name="JavaScript" />
      <Greeting name="Java" />
      <Greeting name="Swift">Language of iOS development</Greeting>
      <hr />
      <Welcome name="Flutter">Language for cross-mobile development</Welcome>
      <Welcome name="React Native" />
      <Welcome name="Golang" />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
