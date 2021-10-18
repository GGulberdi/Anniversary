import desert from './images/desert_photo.jpg';
import './App.css';
import {
  BrowserRouter as Router, //creating an alias of BrowserRouter
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'


function App() {
  return (
    <Router>
      <div className="App">
      <Link exact to='/'></Link>
      <Link to='/home'>Home</Link>
      <header className="App-header">
        <div className='cover'><p>Our Journey started at January 6 2007y</p></div>


        
        <img src={desert} className="App-logo" alt="logo" />
         </header>
<Switch>
<Route  exact path='/'>
  <Home/>
  </Route>
<Route path='/home'>
  <Home/>
  </Route>

</Switch>


    </div>
    </Router>
  );
}

export default App;
