import React, { Component } from 'react';

export default class Foo extends Component {

    render() {
        return (
            <header className="header">
                {this.props.children}
            </header>
        );
    }

} 