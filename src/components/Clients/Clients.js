import React, { Component } from 'react';
import IconKerve from '../icons/IconKerve';
import oliceImgSrc from '../../public/images/olice.png';
import learnsciImgSrc from '../../public/images/learnsci.png';
import data from '../../data.json';

export default class Clients extends Component {
    render() {
        return (
            <div className="clients col-xs-6">
                <ul className="row">
                    <li
                        className="client-icon col-xs-4"
                        title={data.text.clients.kerve.title}>
                        <a href={data.text.clients.kerve.siteUrl}>
                            <IconKerve/>
                        </a>
                    </li>
                    <li
                        className="client-icon col-xs-4"
                        title={data.text.clients.olice.title}>
                        <a href={data.text.clients.olice.siteUrl}>
                            <img src={oliceImgSrc}/>
                        </a>
                    </li>
                    <li
                        className="client-icon col-xs-4 learnsci"
                        title={data.text.clients.learnsci.title}>
                        <a href={data.text.clients.learnsci.siteUrl}>
                            <img src={learnsciImgSrc}/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}