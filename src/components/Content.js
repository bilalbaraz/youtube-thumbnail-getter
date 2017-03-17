import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Content extends Component {
    render() {
        return (
            <main>
                <Row>
                    <Col md={12} sm={12} xs={12} lg={12}>
                        <center></center>
                    </Col>
                </Row>
            </main>
        );
    }
}