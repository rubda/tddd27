import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Favourite extends Component {
    render() {
        return (
            <Button style={{ width: "100px"}}>
                <FontAwesome name='star-o'/>
            </Button>
        );
    }
}

export default Favourite;
