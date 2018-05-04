import React, { Component } from 'react';
import PropTypes from 'prop-types';

const EditableField = (props) => {
        if(props.isEditing) {
            return (
                <input value={ props.text } type='text'
                onChange={ props.handleChange }
                onBlur={ props.handleToggle } autoFocus/>
            )
        }
        return (
            <h3 onClick={ props.handleToggle } style={{ cursor: 'pointer'}}>
                {props.text}
            </h3>
        )
    }

export default EditableField;