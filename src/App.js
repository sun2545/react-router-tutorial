import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import {Home,About} from 'pages';

const App=()=>{
  return(
    <div>
      <Router exact path="/" component={Home}/>
      <Router path="/about" component={About}/>
      <Router path="/about/:name" component={About}/>
      </div>
  );
};

export default App;
