import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

class Delete extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete(`http://127.0.0.1:3000/api/users/${this.props.id}`)
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Button onClick={this.deleteUser} style={{ width: "100px"}}>
                <FontAwesome name="times"/>
            </Button>
        );
    }
}

export default Delete;
