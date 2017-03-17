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
                <Col md={8} sm={8} xs={10} lg={6} xsOffset={1} lgOffset={3} mdOffset={2} smOffset={2}>
                    <center>
                        <Thumbnail placeholder={this.state.thumbnail}/>
                    </center>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={8} sm={8} xs={10} lg={6} xsOffset={1} lgOffset={3} mdOffset={2} smOffset={2}>
                    <center>
                        <Download isDownload={this.state.isDownload} url={this.state.thumbnail}/>
                    </center>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={8} sm={8} xs={12} lg={6} lgOffset={3} mdOffset={2} smOffset={2}>
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