import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class Thumbnail extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Image src={this.props.placeholder} responsive />
        );
    }
}