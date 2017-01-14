import React from 'react';
import data from '../../../data.json';

const Footer = () => (
  <footer className="footer">&copy;{data.text.footer.copyright}</footer>
);

export default Footer;
