import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Card from './modules/assignement-9/card';
import Login from './modules/assignement-9/login';
import ProductDetail from './modules/assignement-9/ProductDetail';

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
            <Route path={"/ProductDetail"}>
              <ProductDetail/>
            </Route>
          </Switch>
        </Router>
      </div>
      
      
    );
  }
}

export default App;