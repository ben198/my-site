import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import Greeting from './components/Greeting/Greeting';
import IconAngular from './components/icons/IconAngular';
import IconBootstrap from './components/icons/IconBootstrap';
import IconCss3 from './components/icons/IconCss3';
import IconGulp from './components/icons/IconGulp';
import IconHtml5 from './components/icons/IconHtml5';
import IconJavascript from './components/icons/IconJavascript';
import IconReact from './components/icons/IconReact';
import IconSass from './components/icons/IconSass';
import IconWebpack from './components/icons/IconWebpack';
import IconKerve from './components/icons/IconKerve';
import oliceImgSrc from './public/images/olice.png';
import learnsciImgSrc from './public/images/learnsci.png';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './components/styles.scss';

render(
    <div>
        <div className="container-toplevel">
            <Header>
                <div className="center">
                    <Logo/>
                    <Nav/>
                </div>
            </Header>
            <div className="container">
                <div className="row">
                    <div className="container-greeting col-xs-12 col-sm-6">
                        <Greeting/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xs-3 col-xs-offset-1">
                    <div className="row skills-row">
                        {[
                            <IconAngular/>,
                            <IconBootstrap/>,
                            <IconCss3/>,
                            <IconGulp/>,
                            <IconHtml5/>,
                            <IconJavascript/>,
                            <IconReact/>,
                            <IconSass/>,
                            <IconWebpack/>
                        ].map((ele, index) =>
                            <div
                                className="col-md-4 col-xs-6"
                                title="Foo"
                                ref={index}>
                                {ele}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-xs-4 col-xs-offset-3">
                    <div className="row clients-row">
                        <div
                            className="col-lg-4 col-sm-6 col-xs-12"
                            title="Foo">
                            <a href="">
                                <IconKerve/>
                            </a>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6 col-xs-12"
                            title="Foo">
                            <a href="">
                                <img src={oliceImgSrc}/>
                            </a>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6 col-xs-12 learnsci"
                            title="Foo">
                            <a href="">
                                <img src={learnsciImgSrc}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>,
    document.getElementById('container')
);