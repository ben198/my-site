import React, { Component } from 'react';
import imgMe from '../../../public/images/img-me.png';

export default class Logo extends Component {
    render() {
        return (
            <a href="javascript:void(0)" className="logo">
              <img src={imgMe} alt="Logo Image"/>
            </a>
        );
    }
}