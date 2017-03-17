import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col md={12} sm={12} xs={12} lg={12}>
                        <center><p>2017</p></center>
                    </Col>
                </Row>
            </footer>
        );
    }
}