import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Contacted extends Component {
    render() {
        return (
            <Button style={{ width: "100px"}}>
                <FontAwesome name='square-o'/>
            </Button>
        );
    }
}

export default Contacted;
