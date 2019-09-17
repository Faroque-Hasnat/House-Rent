import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Setting from '../pages/setting';
import Details from '../pages/Details';
import Login from '../pages/Login'

function App() {
  return (
    <div className="App container mt-3">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/setting" component={Setting} />
          <Route path="/details" component={Details} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
