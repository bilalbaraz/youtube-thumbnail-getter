import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Form from './Form';

export default class Content extends Component {
    render() {
        return (
            <main>
                <Row>
                    <Col md={6} sm={6} xs={6} lg={6} xsOffset={3} lgOffset={3} mdOffset={3} smOffset={3}>
                        <Form/>
                    </Col>
                </Row>
            </main>
        );
    }
}