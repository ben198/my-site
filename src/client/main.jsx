import React from 'react';
import { render } from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './components/App.jsx';
import './components/styles.scss';

render(
  <App/>,
  document.getElementById('container')
);
