import React from 'react';

const Landing = () => {
  const containerStyle = {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    margin: '0px auto 20px auto',
    background: 'white',
    paddingTop: '40px'
  }
  return (
    <React.Fragment>
      <div style={containerStyle}>
        <h2 style={{marginBottom: '50px', fontFamily: 'Roboto', fontSize: '40px', color: '#555'}}>Welcome to Loop.io!</h2>
        <p style={{fontFamily: '25px', marginTop: '50px'}}>The app that always keeps you up to date with product feedback</p>
      </div>
    </React.Fragment>
  )
}
export default Landing;