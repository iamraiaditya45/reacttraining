import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Card from './modules/assignement-9/card';
import Login from './modules/assignement-9/login';
import ProductDetail from './modules/assignement-9/ProductDetail';
import {ThemeContext,initialState} from "./modules/assignment12";
import Assignment12 from "./modules/assignment12"


const App = (props) => {

  return(
    <div>
      <Assignment12 />
    </div>
  );
}

export default App;
