import React, { Component } from 'react';
import IconAngular from '../icons/IconAngular';
import IconBootstrap from '../icons/IconBootstrap';
import IconCss3 from '../icons/IconCss3';
import IconGulp from '../icons/IconGulp';
import IconHtml5 from '../icons/IconHtml5';
import IconJavascript from '../icons/IconJavascript';
import IconReact from '../icons/IconReact';
import IconSass from '../icons/IconSass';
import IconWebpack from '../icons/IconWebpack';

export default class Skills extends Component {
    render() {
        return (
            <div className="skills container">
                <div className="row">
                    <div className="col-xs-6">
                        <ul className="row">
                            <li className="skill-icon col-xs-4"><IconHtml5/></li>
                            <li className="skill-icon col-xs-4"><IconCss3/></li>
                            <li className="skill-icon col-xs-4"><IconJavascript/></li>
                        </ul>
                        <ul className="row">
                            <li className="skill-icon col-xs-4"><IconSass/></li>
                            <li className="skill-icon col-xs-4"><IconAngular/></li>
                            <li className="skill-icon col-xs-4"><IconGulp/></li>
                        </ul>
                        <ul className="row">
                            <li className="skill-icon col-xs-4"><IconReact/></li>
                            <li className="skill-icon col-xs-4"><IconWebpack/></li>
                            <li className="skill-icon col-xs-4"><IconBootstrap/></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}