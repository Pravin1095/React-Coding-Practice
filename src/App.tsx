// import logo from './logo.svg';
// import './App.css';
import Faqs from './components/Faqs.js';
import TrafficLight from './components/TrafficLight.js';
import InfiniteScroll from './components/InfiniteScroll.js';
// import SlowComponent, { OptimizedVersion } from './components/SlowCounter.js';
import SlowCounter from './components/SlowCounter.js';
import FetchUsers from './components/FetchUsers.js';
import DisplayData from './components/DisplayData.js';
import PerformanceApp from './PerformanceConcepts/App.tsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Faqs /> */}
      {/* <TrafficLight /> */}
      {/* <InfiniteScroll /> */}
      {/* <SlowCounter /> */}
      {/* <OptimizedVersion /> */}
      {/* <DisplayData />
      <FetchUsers /> */}
      <PerformanceApp />
    </div>
  );
}

export default App;
