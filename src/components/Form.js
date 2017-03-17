import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = (e) => {
        console.log(this.state.value);
        e.preventDefault();
        return false;
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Enter Youtube URL and then press 'Enter' key"
                        bsSize="large"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <HelpBlock>Your input must contain YouTube video link</HelpBlock>
                </FormGroup>
            </form>
        );
    }
}