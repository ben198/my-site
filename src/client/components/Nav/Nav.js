import React, { Component } from 'react';
import IconLinkedin from '../icons/IconLinkedin';
import IconYoutube from '../icons/IconYoutube';
import IconTwitter from '../icons/IconTwitter';
import IconGithub from '../icons/IconGithub';
import imgMe from '../../../public/images/img-me.png';

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav-custom">
                <ul className="nav-items">
                    <li className="nav-item nav-item-linkedin">
                         <a className="nav-item-link nav-item-link-linkedin" href="https://uk.linkedin.com/in/ben-townsend-6295b5a5">
                            <IconLinkedin/>
                        </a>                       
                    </li>
                    <li className="nav-item nav-item-twitter">
                         <a className="nav-item-link nav-item-link-twitter" href="https://twitter.com/BenCenydd">
                            <IconTwitter/>
                        </a>                       
                    </li>
                    <li className="nav-item nav-item-youtube">
                        <a className="nav-item-link nav-item-link-youtube" href="https://www.youtube.com/channel/UCr52gFw23gSR93jb4MIuBuQ">
                            <IconYoutube/>
                        </a>                        
                    </li>
                    <li className="nav-item nav-item-github">
                        <a className="nav-item-link nav-item-link-github" href="https://github.com/ben198">
                            <IconGithub/>
                        </a>                      
                    </li>
                </ul>
            </nav>
        );
    }
}