import React, { Component } from 'react';
import IconMail from '../icons/IconMail';
import data from '../../data.json';

export default class Greeting extends Component {

    constructor(props) {
        super(props);
        this.rootEleClasses = ['greeting'].concat(this.props.classNames);
    }

    render() {
        return (
            <div className={this.rootEleClasses.join(' ').trim()}>
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