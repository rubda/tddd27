import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: this.props.favourite,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({favourite: !this.state.favourite}, () => {
            let params = new URLSearchParams();
            params.append('favourite', this.state.favourite);

            axios.post(`http://127.0.0.1:3000/api/users/${this.props.id}`, params)
                .catch(function (error) {
                    console.log(error);
                });
        });
    }

    render() {
        let icon = this.state.favourite ? 'star' : 'star-o';
        return (
            <Button onClick={this.toggle} style={{ width: "100px"}}>
                <FontAwesome name={icon}/>
            </Button>
        );
    }
}

export default Favourite;
