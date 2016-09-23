import React, { Component } from 'react';
import IconMail from '../icons/IconMail';
import data from '../../data.json';

export default class Greeting extends Component {
    render() {
        return (
            <div className="greeting">
                <div>
                    <h2 className="greeting-heading">{data.text.greeting.heading}</h2>
                    <p className="greeting-text">{data.text.greeting.body}</p>
                    <a className="greeting-icon" href="mailto:btownsend220@gmail.com">
                        <IconMail/>
                    </a>
                </div>
            </div>
        );
    }
}