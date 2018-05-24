import React from 'react';

const Contact = (props) => {
    return (
        <li>{props.firstName}, {props.lastName}, {props.email}</li>
    )
}

export default Contact;