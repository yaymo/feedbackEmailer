import React from 'react';
import FontAwesomeIcon  from '@fortawesome/react-fontawesome';
import faCaretSquareDown from '@fortawesome/free-solid-svg-icons/faCaretSquareDown';
import faEnvelope from '@fortawesome/free-solid-svg-icons/faEnvelope';
import faMousePointer from '@fortawesome/free-solid-svg-icons/faMousePointer';
import faChartLine from '@fortawesome/free-solid-svg-icons/faChartLine'
import './landing.css';
import Footer from '../Footer';
//TODO: revisit the icons; font awesome CDN is down
const Landing = () => {
  return (
    <React.Fragment>
      <div className="landing-container">
        <div className="panel">
          <h2 className="landing-header">Welcome to Loop.io!</h2>
        </div>
        <h4 className="landing-description">The app that keeps you up-to-date with product feedback</h4>
        <a id="feature-link" href="#features">FEATURES<FontAwesomeIcon icon={faCaretSquareDown} size="4x" color="white"/></a>
        <div id="features">
          <ul className="feature-list">Emails<FontAwesomeIcon icon={faEnvelope} />
            <li>Create surveys and email them to users</li>
          </ul>
          <ul className="feature-list">Click Tracking<FontAwesomeIcon icon={faMousePointer} />
            <li>Track yes/no responses to surveys</li>
          </ul>
          <ul className="feature-list">Analytics<FontAwesomeIcon icon={faChartLine} />
            <li>Sort, filter, and update surveys from a convenient dashboard</li>
          </ul>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default Landing;