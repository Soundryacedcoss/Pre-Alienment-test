import { Age } from './Age';
import './App.css';
import { CounterComponant } from './CounterComponant';
import { Gender } from './Gender';
function App() {
  return (
    <div className="App">
      <CounterComponant/>
      <hr />
      <Age/>
    </div>
  );
}

export default App;
