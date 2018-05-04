import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditableField extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    static defaultProps = {
        text: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            isEditing: false
        }
    }

    handleToggle = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleChange = () => {
        this.setState({ text: this.textInput.value });
    }

    render() {
        const { text, isEditing } = this.state;

        if(isEditing) {
            return (
                <input value={ text } type='text'
                onChange={ this.handleChange }
                onBlur={ this.handleToggle } autoFocus/>
            )
        }
        return (
            <h3 onClick={ this.handleToggle } style={{ cursor: 'pointer'}}>
                {text}
            </h3>
        )
    }
}

export default EditableField;