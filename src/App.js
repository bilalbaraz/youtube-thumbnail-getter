import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Grid>
                <Header title="Youtube Thumbnailer"/>
                <Content/>
                <Footer/>
            </Grid>
        );
    }
}

export default App;
