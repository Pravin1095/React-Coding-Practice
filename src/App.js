import logo from './logo.svg';
import './App.css';
import Faqs from './components/Faqs';
import TrafficLight from './components/TrafficLight';
import InfiniteScroll from './components/InfiniteScroll';
import SlowComponent, { OptimizedVersion } from './components/SlowCounter';
import SlowCounter from './components/SlowCounter';
import FetchUsers from './components/FetchUsers';
import DisplayData from './components/DisplayData';
import PerformanceApp from './PerformanceConcepts/App';

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
