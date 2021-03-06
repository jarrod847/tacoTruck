import "./App.css";
import HomePage from "./Components/homepage/homepage";
import NavBar from "./Components/nav/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchMenu from "./Components/Menu/searchMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={SearchMenu} />
      </Router>
    </div>
  );
}

export default App;
