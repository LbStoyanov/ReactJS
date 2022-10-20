import logo from "./logo.svg";
import "./App.css";
import MyCustomComponent from "./MyCustomComponent";
import { MyCustomComponent2 } from "./MyCustomComponent2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <p>Welcome to ReactJS</p>

        <div className="Components">
          <hr />
          <MyCustomComponent2 />
          <hr />
          <MyCustomComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
