import React from 'react';
import {  Route, Redirect, HashRouter } from 'react-router-dom'

import Trel from '../trel/trel';
import About from '../about/about';

export default props => (
    <HashRouter>
      <div>
        <Route exact path="/trel" component={Trel} />
        <Route path="/about" component={About} />
        <Redirect from='*' to='/trel'/>
      </div>
   </HashRouter >
)