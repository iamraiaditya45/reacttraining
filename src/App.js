import React from 'react'
import Assignment9 from './modules/assignement-9'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Card from './modules/assignement-9/card';
import Login from './modules/assignement-9/login';
import Carddetail from './modules/assignement-9/carddetail.js';

class App extends React.Component{
  render(){
    return(
      
        <div>
        <Router>
        <Switch>
            <Route path={"/"} exact>
              <Login />
            </Route>
            <Route path={"/Card"}>
              <Card />
            </Route>
            <Route path={"/carddetail/:ProductID"}>
              <Carddetail />
            </Route>
          </Switch>
        </Router>
      </div>
      
      
    );
  }
}

export default App;