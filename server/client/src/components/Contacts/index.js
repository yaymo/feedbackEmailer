import React from 'react';

const Contacts = ({ title, children }) => {
    return (
        <ul><h3>{ title }</h3>
            { children }
        </ul>
    )
}

export default Contacts;