import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className=" footer">
      <div className="contact-info">
        <a className="col-4" href="mailto:stevenjamesonhill@gmail.com">Email</a>
        <a className="col-4" href="https://github.com/yaymo">GitHub</a>
        <a className="col-4" href="https://www.linkedin.com/in/jamesonhill/">LinkedIn</a>
      </div>
    </footer>
  )
}
export default Footer;