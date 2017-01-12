import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './components/styles.scss';

render(
    <App/>,
    document.getElementById('container')
);
