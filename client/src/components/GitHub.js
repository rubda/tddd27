import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class GitHub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            repos: []
        };

        this.toggle = this.toggle.bind(this);
    }

    /*
    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.github}/repos`)
            .then(res => {
                const repos = res.data.map(obj => obj);
                this.setState({ repos });
            });
    }
    */

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button style={{ width: "100px"}} onClick={this.toggle}><FontAwesome name="github"/></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.github}</ModalHeader>
                    <ModalBody>
                        <h6>Repositories</h6>
                        <ul>
                            {this.state.repos.map(repos =>
                                <li key={ repos.id }><a href={ repos.html_url }>{ repos.name } - { repos.description }</a></li>
                            )}
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default GitHub;
