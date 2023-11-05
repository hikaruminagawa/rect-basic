import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import TextInput from './components/TextInput';
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Article
          title="Welcome to React"
          content="Hello there!"
        />
        <TextInput/>
        <Counter/>
        <ToggleButton/>
      </header>
    </div>
  );
}

export default App;
