import React from 'react';
import FontAwesomeIcon  from '@fortawesome/react-fontawesome';
import faCaretSquareDown from '@fortawesome/free-solid-svg-icons/faCaretSquareDown';
import './landing.css';
import Footer from '../Footer';

const Landing = () => {
  return (
    <React.Fragment>
      <div className="landing-container">
        <div className="panel">
          <h2 className="landing-header">Welcome to Loop.io!</h2>
        </div>
        <h4 className="landing-description">The app that keeps you up to date with product feedback</h4>
        <a id="feature-link" href="#features">FEATURES<FontAwesomeIcon icon={faCaretSquareDown} size="4x" color="white"/></a>
        <div>
          <div id="features">
            <ul className="feature-list">Emails!
              <li style={{listStyle: 'none'}}>Create surveys and email them to users</li>
            </ul>
            <ul className="feature-list">Click Tracking!
              <li style={{listStyle: 'none'}}>Track users responses to surveys</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default Landing;