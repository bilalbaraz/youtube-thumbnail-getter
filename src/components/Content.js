import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

import Thumbnail from './Thumbnail';
import Download from './Download';

import { Youtube } from '../Youtube.js';

export default class Content extends Component {

    constructor(props){
        super(props);
        this.state = {value: '', thumbnail: 'images/thumbnail.jpg', isDownload: false};
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = (e) => {
        if(this.state.value !== '' || this.state.value.length > 0){

            this.setState({
                thumbnail: Youtube.thumb(this.state.value),
                value: '',
                isDownload: true
            });

        }else{

            alert("You cannot send it empty");

        }

        e.preventDefault();
        return false;
    };

    render() {
        return (
        <main>
            <Row>
                <Col md={6} sm={6} xs={6} lg={6} xsOffset={3} lgOffset={3} mdOffset={3} smOffset={3}>
                    <center>
                        <Thumbnail placeholder={this.state.thumbnail}/>
                    </center>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={6} sm={6} xs={6} lg={6} xsOffset={3} lgOffset={3} mdOffset={3} smOffset={3}>
                    <center>
                        <Download isDownload={this.state.isDownload} url={this.state.thumbnail}/>
                    </center>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={6} sm={6} xs={6} lg={6} xsOffset={3} lgOffset={3} mdOffset={3} smOffset={3}>
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
                </Col>
            </Row>
        </main>
        );
    }
}