import React from 'react';
import IconMail from '../icons/IconMail.jsx';
import data from '../../../data.json';

const Greeting = () => (
  <div className="greeting">
    <h2 className="greeting-heading">{data.text.greeting.heading}</h2>
    <p className="greeting-text">{data.text.greeting.body}</p>
    <a className="greeting-icon" href="mailto:btownsend220@gmail.com">
      <IconMail/>
    </a>
  </div>
);

export default Greeting;
