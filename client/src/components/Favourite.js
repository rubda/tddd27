import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

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

        let params = new URLSearchParams();
        params.append('favourite', this.state.favourite);

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

export default Favourite;
