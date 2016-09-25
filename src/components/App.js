import React, { Component } from 'react';
import data from '../data.json';
import reactTweetsSrc from '../public/images/tweets.jpg';
import fruitMachineSrc from '../public/images/fruit-machine.png';
import musicAppSrc from '../public/images/music-app.jpg';
import metronomeSrc from '../public/images/metronome.jpg';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Logo from './Logo/Logo';
import Footer from './Footer/Footer';
import Greeting from './Greeting/Greeting';
import Project from './Project/Project';
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
                <div className="container full-height">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-sm-12 col-sm-offset-0">
                            <Header>
                                <Logo/>
                                <Nav/>
                            </Header>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container-greeting col-xs-12 col-sm-6">
                            <Greeting/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="skills col-xs-8 col-xs-offset-2 col-sm-5 col-sm-offset-0">
                            <h3 className="heading-small">{data.text.skills.header}</h3>
                            <div className="row skills-row">
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.html}>
                                    <IconHtml5/>
                                </div>
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.css}>
                                    <IconCss3/>
                                </div>
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.js}>
                                    <IconJavascript/>
                                </div>
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.sass}>
                                    <IconSass/>
                                </div>
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.angular}>
                                    <IconAngular/>
                                </div>
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.gulp}>
                                    <IconGulp/>
                                </div>
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.react}>
                                    <IconReact/>
                                </div>
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.webpack}>
                                    <IconWebpack/>
                                </div>
                                <div
                                    className="col-xs-4 col-md-3"
                                    title={data.text.skills.bootstrap}>
                                    <IconBootstrap/>
                                </div>
                            </div>
                        </div>
                        <div className="clients col-xs-8 col-xs-offset-2 col-sm-5 col-sm-offset-2">
                            <div className="row clients-row">
                                <h3 className="heading-small col-xs-12">
                                    {data.text.clients.header}
                                </h3>
                                <div
                                    className="col-xs-6 col-md-4"
                                    title={data.text.clients.kerve.title}>
                                    <a href={data.text.clients.kerve.siteUrl}>
                                        <IconKerve/>
                                    </a>
                                </div>
                                <div
                                    className="col-xs-6 col-md-4"
                                    title={data.text.clients.olice.title}>
                                    <a href={data.text.clients.olice.siteUrl}>
                                        <img src={oliceImgSrc}/>
                                    </a>
                                </div>
                                <div
                                    className="col-xs-6 col-md-4 learnsci"
                                    title={data.text.clients.learnsci.title}>
                                    <a href={data.text.clients.learnsci.siteUrl}>
                                        <img src={learnsciImgSrc}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="heading-small">{data.text.projects.title}</h3>
                    <Project
                        title={data.text.projects.reactTweets.title}
                        text={data.text.projects.reactTweets.text}
                        image={reactTweetsSrc}
                        link={data.text.projects.reactTweets.link}/>
                    <Project
                        title={data.text.projects.fruitMachine.title}
                        text={data.text.projects.fruitMachine.text}
                        image={fruitMachineSrc}
                        link={data.text.projects.fruitMachine.link}/>
                    <Project
                        title={data.text.projects.musicApp.title}
                        text={data.text.projects.musicApp.text}
                        image={musicAppSrc}
                        link={data.text.projects.musicApp.link}/>
                    <Project
                        title={data.text.projects.metronome.title}
                        text={data.text.projects.metronome.text}
                        image={metronomeSrc}
                        link={data.text.projects.metronome.link}/>
                </div>
                <Footer/>
            </div>
        );
    }
}