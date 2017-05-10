import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: this.props.favourite,
            name: this.props.favourite ? 'star' : 'star-o'
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            favourite: !this.state.favourite,
            name: this.state.favourite ? 'star' : 'star-o'
        });
    }

    render() {
        return (
            <Button onClick={this.toggle} style={{ width: "100px"}}>
                <FontAwesome name={this.state.name}/>
            </Button>
        );
    }
}

export default Favourite;
