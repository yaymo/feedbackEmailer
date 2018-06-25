import React from 'react';
import './landing.css';
import Footer from '../Footer';

const Landing = () => {
  return (
    <React.Fragment>
      <div className="landing-container">
        <div className="">
          <h2 className="landing-header">Welcome to Loop.io!</h2>
          <p className="landing-description">The app that always keeps you up to date with product feedback</p>
        </div>
        <div className="features">Check out some of our features <a href="/features">HERE</a></div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default Landing;