import React, { Component } from 'react';
import IconMail from '../icons/IconMail';

export default class Greeting extends Component {
    render() {
        return (
            <div className="greeting">
                <div>
                    <h2 className="greeting-heading">Hello. My name is Ben.</h2>
                    <p className="greeting-text">Thank you for stopping by. I'm a front end developer based in Bristol, England. On this page you can find examples of some of my recent projects. I am taking on freelance work right now, so if you would like to work with me please do get in touch.</p>
                    <a className="greeting-icon" href="mailto:btownsend220@gmail.com">
                        <IconMail/>
                    </a>
                </div>
            </div>
        );
    }
}