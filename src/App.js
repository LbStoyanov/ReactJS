import logo from './logo.svg';
import './App.css';
import MyCustomComponent from './MyCustomComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyCustomComponent/>
        <MyCustomComponent/>
        <MyCustomComponent/>
        <MyCustomComponent/>
      </header>
    </div>
  );
}

export default App;
