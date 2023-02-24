import './App.css';
import GrandParent from './components/GrandParent';
import { ChannelProvider, UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Nabendu">
        <ChannelProvider value="TWD">
          <GrandParent />
        </ChannelProvider>
      </UserProvider>
    </div>
  );
}

export default App;
