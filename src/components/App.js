import React, { Component } from 'react';
import data from '../data.json';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Logo from './Logo/Logo';
import Footer from './Footer/Footer';
import Greeting from './Greeting/Greeting';
import IconAngular from './icons/IconAngular';
import IconBootstrap from './icons/IconBootstrap';
import IconCss3 from './icons/IconCss3';
import IconGulp from './icons/IconGulp';
import IconHtml5 from './icons/IconHtml5';
import IconJavascript from './icons/IconJavascript';
import IconReact from './icons/IconReact';
import IconSass from './icons/IconSass';
import IconWebpack from './icons/IconWebpack';
import IconKerve from './icons/IconKerve';
import oliceImgSrc from '../public/images/olice.png';
import learnsciImgSrc from '../public/images/learnsci.png';

export default class App extends Component {
    render() {
        return (
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
                                <h3 className="heading-small col-xs-12">
                                    {data.text.skills.header}
                                </h3>
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
                                <h3 className="heading-small col-xs-12">
                                    {data.text.clients.header}
                                </h3>
                                <div
                                    className="col-xs-4"
                                    title={data.text.clients.kerve.title}>
                                    <a href={data.text.clients.kerve.siteUrl}>
                                        <IconKerve/>
                                    </a>
                                </div>
                                <div
                                    className="col-xs-4"
                                    title={data.text.clients.olice.title}>
                                    <a href={data.text.clients.olice.siteUrl}>
                                        <img src={oliceImgSrc}/>
                                    </a>
                                </div>
                                <div
                                    className="col-xs-4 learnsci"
                                    title={data.text.clients.learnsci.title}>
                                    <a href={data.text.clients.learnsci.siteUrl}>
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
            </div>
        );
    }
}