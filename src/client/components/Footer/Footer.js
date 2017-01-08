import React, { Component } from 'react';
import data from '../../../data.json';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">&copy;{data.text.footer.copyright}</footer>
        );
    }
}