import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://github.com/ripvanbl/brandonlind" target="_blank" rel="noopener noreferrer" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/brandon-lind" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#contactme" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; 2019 Brandon Lind</li>
            <li>
              Design: <a href="http://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
