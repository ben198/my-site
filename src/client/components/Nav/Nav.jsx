import React from 'react';
import IconLinkedin from '../icons/IconLinkedin.jsx';
import IconYoutube from '../icons/IconYoutube.jsx';
import IconTwitter from '../icons/IconTwitter.jsx';
import IconGithub from '../icons/IconGithub.jsx';

const Nav = () => (
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
        <a className="nav-item-link nav-item-link-youtube"
           href="https://www.youtube.com/channel/UCr52gFw23gSR93jb4MIuBuQ">
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

export default Nav;
