import React, { Component } from 'react';
import IconKerve from '../icons/IconKerve';
import oliceImgSrc from '../../public/images/olice.png';
import learnsciImgSrc from '../../public/images/learnsci.png';

export default class Clients extends Component {
    render() {
        return (
            <div className="clients col-xs-6">
                <ul className="row">
                    <li className="client-icon col-xs-4"><IconKerve/></li>
                    <li className="client-icon col-xs-4"><img src={oliceImgSrc}/></li>
                    <li className="client-icon col-xs-4 learnsci"><img src={learnsciImgSrc}/></li>
                </ul>
            </div>
        );
    }
}