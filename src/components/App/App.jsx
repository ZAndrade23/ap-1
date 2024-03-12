import {useState} from 'react';
import React from 'react';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import About from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import './App.css';
import {
  HashRouter as Router,
  Route, 
} from "react-router-dom";
function App () {
  return (
    <div>
      <Router>
  <NavBar />
    <Route exact path="/home">
  <Home />
  </Route>
  <Route exact path="/about">
  <About/>
  </Route>
  </Router>
  {/* <h1>TO DO APP</h1>
  <div class="cater3-movingBG">
<div class="flyinTxtCont">
<div class="flyIn lineOne">Living</div>
<div class="flyIn lineTwo">A Better </div>
<div class="flyIn lineThree">LifeStyle</div>
  <div class="flyIn lineFour">Powered By YOU.</div>
</div>
</div> */}
<Footer/>
    </div>

  );

}

export default App
