import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

class Contacted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacted: this.props.contacted,
            name: this.props.contacted ? 'check-square' : 'square-o'
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            contacted: !this.state.contacted,
            name: this.state.contacted ? 'check-square' : 'square-o'
        });

        let params = new URLSearchParams();
        params.append('contacted', this.state.contacted);

        axios.post(`http://127.0.0.1:3000/api/users/${this.props.id}`, params)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
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

export default Contacted;
