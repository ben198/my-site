import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import Greeting from './components/Greeting/Greeting';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './components/styles.scss';

render(
    <div>
        <Header>
            <div className="center">
                <Logo/>
                <Nav/>
            </div>
        </Header>
        <div className="container">
            <div className="row">
                <Greeting classNames={['col-xs-12', 'col-sm-6']}/>
            </div>
        </div>
    </div>,
    document.getElementById('container')
);