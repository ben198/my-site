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
import data from '../../data.json';

export default class Skills extends Component {
    render() {
        return (
            <div className="skills col-xs-6">
                <ul className="row">
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.html}>
                        <IconHtml5/>
                    </li>
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.css}>
                        <IconCss3/>
                    </li>
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.js}>
                        <IconJavascript/>
                    </li>
                </ul>
                <ul className="row">
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.sass}>
                        <IconSass/>
                    </li>
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.angular}>
                        <IconAngular/>
                    </li>
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.gulp}>
                        <IconGulp/>
                    </li>
                </ul>
                <ul className="row">
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.react}>
                        <IconReact/>
                    </li>
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.webpack}>
                        <IconWebpack/>
                    </li>
                    <li
                        className="skill-icon col-xs-4"
                        title={data.text.skills.bootstrap}>
                        <IconBootstrap/>
                    </li>
                </ul>
            </div>
        );
    }
}