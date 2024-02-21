
import './App.css';
import Home from './Home';
import Products from './Products';
import Navbar from './navbar';
import {Switch, Route, } from 'react-router-dom';

function App() {
  return (
  <>
  { <Navbar/> }
  <Switch>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/' Component={Products}/>
    
  </Switch>
  </>
     
  );
}

export default App;
