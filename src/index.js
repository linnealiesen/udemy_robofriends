import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import { robots } from './robots.js';

ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);
