import React, { Component } from 'react';

class EditableField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }
    render() {
        const { text } = this.state;

        if(this.props.isEditing) {
            return (
                <input value={ text } type='text'
                    onChange={ this.handleChange }
                    onBlur={this.props.handleToggle} autoFocus />
            )
        }
        return (
            <h3 onClick={ this.props.handleToggle } style={{ cursor: 'pointer'}}>
                {text}
            </h3>
        )
    }
}

export default EditableField;