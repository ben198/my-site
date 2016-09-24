import React from 'react';
import { render } from 'react-dom';
import data from './data.json';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';
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
                <div className="skills col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-0">
                    <div className="row skills-row">
                        <h3 className="heading-small col-xs-12">My skills</h3>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.html}>
                            <IconHtml5/>
                        </div>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.css}>
                            <IconCss3/>
                        </div>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.js}>
                            <IconJavascript/>
                        </div>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.sass}>
                            <IconSass/>
                        </div>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.angular}>
                            <IconAngular/>
                        </div>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.gulp}>
                            <IconGulp/>
                        </div>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.react}>
                            <IconReact/>
                        </div>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.webpack}>
                            <IconWebpack/>
                        </div>
                        <div
                            className="col-xs-3"
                            title={data.text.skills.bootstrap}>
                            <IconBootstrap/>
                        </div>
                    </div>
                </div>
                <div className="clients col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-2">
                    <div className="row clients-row">
                        <h3 className="heading-small col-xs-12">Companies I have worked with</h3>
                        <div
                            className="col-xs-4"
                            title="Foo">
                            <a href="">
                                <IconKerve/>
                            </a>
                        </div>
                        <div
                            className="col-xs-4"
                            title="Foo">
                            <a href="">
                                <img src={oliceImgSrc}/>
                            </a>
                        </div>
                        <div
                            className="col-xs-4 learnsci"
                            title="Foo">
                            <a href="">
                                <img src={learnsciImgSrc}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="center">
            <Footer/>
        </div>
    </div>,
    document.getElementById('container')
);