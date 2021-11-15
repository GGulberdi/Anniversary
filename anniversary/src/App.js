import "./App.css";
import {
  BrowserRouter as Router, //creating an alias of BrowserRouter
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import OneYear from "./components/OneYear";
import TwoYear from "./components/TwoYear";
import ThreeYear from "./components/ThreeYear";
import FourYear from "./components/FourYear";
import FiveYear from "./components/FiveYear";
import SixYear from "./components/SixYear";
import SevenYear from "./components/SevenYear";
import EightYear from "./components/EightYear";
import NineYear from "./components/NineYear";
import TenYear from "./components/TenYear";
import ElevenYear from "./components/ElevenYear";
import TwelveYear from "./components/TwelveYear";
import ThirteenYear from "./components/ThirteenYear";
import FourteenYear from "./components/FourYear";
import FifteenYear from "./components/FifteenYear";


function App() {
  return (
    <Router>
      <div className="App">
        <div className='sidebar'>
      <Link exact to="/">Home</Link>
      <Link exact to="/oneyear">First Year</Link>
      <Link exact to="/twoyear">Second Year</Link>
      <Link exact to="/threeyear">Third Year</Link>
      <Link exact to="/fouryear">Forth Year</Link>
      <Link exact to="/fiveyear">Fifth Year</Link>
      <Link exact to="/sixyear">Sixth Year</Link>
      <Link exact to="/sevenyear">Seventh Year</Link>
      <Link exact to="/eightyear">Eighth Year</Link>
      <Link exact to="/nineyear">Ningth Year</Link>
      <Link exact to="/tenyear">Tenth Year</Link>
      <Link exact to="/elevenyear">Eleventh Year</Link>
      <Link exact to="/twelveyear">Twelth Year</Link>
      <Link exact to="/thirteenyear">Thirtinth Year</Link>
      <Link exact to="/fourteenyear">Fourtinth Year</Link>
      <Link exact to="/fifteenyear">Fifteenth Year</Link>
</div>
        
<div className='mainpage'>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/oneyear"><OneYear /></Route>
          <Route exact path="/twoyear"><TwoYear /></Route>
          <Route exact path="/threeyear"><ThreeYear /></Route>
          <Route exact path="/fouryear"><FourYear /></Route>
          <Route exact path="/fiveyear"><FiveYear /></Route>
          <Route exact path="/sixyear"><SixYear /></Route>
          <Route exact path="/sevenyear"><SevenYear /></Route>
          <Route exact path="/eightyear"><EightYear /></Route>
          <Route exact path="/nineyear"><NineYear /></Route>
          <Route exact path="/tenyear"><TenYear /></Route>
          <Route exact path="/elevenyear"><ElevenYear /></Route>
          <Route exact path="/twelveyear"><TwelveYear /></Route>
          <Route exact path="/thirteenyear"><ThirteenYear /></Route>
          <Route exact path="/fourteenyear"><FourteenYear /></Route>
          <Route exact path="/fifteenyear"><FifteenYear /></Route>

        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
