import React from 'react';

const EmptyList = () =>
  <div style={{textAlign: 'center', margin: '10px auto', fontFamily: 'Roboto', color: '#555'}}>
    <h1 className="col-12">You have not sent any surveys!</h1>
    <h3 className="col-12">Add credits or click the
      <span style={{color: 'red', margin:'5px 10px 0 10px', fontSize: '40px'}}>+</span>
      in the bottom left corner
    </h3>
  </div>

export default EmptyList;