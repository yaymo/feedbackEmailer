import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import './loading.css'

const LoadingIndicator = () => (
    <div className='overlay' >
        <div className='main'>
            <div className='loading-header'>Loading...</div>
            <FontAwesomeIcon icon={faSpinner} size='6x' color='white' spin/>
        </div>
    </div>
);

export default LoadingIndicator;
