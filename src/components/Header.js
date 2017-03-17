import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Header extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <header>
                <Row>
                    <Col md={12} sm={12} xs={12} lg={12}>
                        <center><h1>{this.props.title}</h1></center>
                    </Col>
                </Row>
            </header>
        );
    }
}