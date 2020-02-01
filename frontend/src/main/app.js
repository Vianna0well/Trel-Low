import React from 'react';

import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import Trel from '../trel/trel';
import About from '../about/about';
import Menu from '../template/menu';

export default props => (
  <div className='container'>
    <Menu />
    <Trel />
    <About />
  </div>
);
