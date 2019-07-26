import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, UpdatePage } from '../pages'

import './app.css';


const App = () => {
  return (
    <Switch>
      <Route 
      path='/'
      component={HomePage}
      exact 
      />

    <Route 
      path='/update'
      component={UpdatePage}
      exact 
      />
    </Switch>
    
  )
}

export default App;