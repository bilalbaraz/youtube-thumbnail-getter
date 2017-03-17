import React, { Component } from 'react';

export default class Download extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.isDownload){
            return (
                <a href={this.props.url} className="btn btn-success" download>Download</a>
            );
        }else{
            return false;
        }
    }
}