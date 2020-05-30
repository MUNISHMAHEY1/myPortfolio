import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Switch , Route } from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Error from './components/Error';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/aboutme" component={AboutMe}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
