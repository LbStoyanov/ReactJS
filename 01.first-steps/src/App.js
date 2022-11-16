import logo from "./logo.svg";
import "./App.css";
import MyCustomComponent from "./MyCustomComponent";
import { MyCustomComponent2 } from "./MyCustomComponent2";
import { EventsComponents } from "./EventsComponents";
import { MyFirstUsestate} from"./components/MyFirstUsestate";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <p>Welcome to ReactJS</p>

        <MyFirstUsestate />

        <div className="Components">
          <hr />
            <EventsComponents />
          <hr />
            <MyCustomComponent2 />
          <hr />
            <MyCustomComponent />
          <hr />
          
        </div>
      </header>
    </div>
  );
}

export default App;
