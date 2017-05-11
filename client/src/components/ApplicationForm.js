import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class ApplicationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            desc: '',
            email: '',
            github: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleGitHubChange = this.handleGitHubChange.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleAgeChange(event) {
        this.setState({age: event.target.value});
    }

    handleDescChange(event) {
        this.setState({desc: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleGitHubChange(event) {
        this.setState({github: event.target.value});
    }

    addUser() {
        let params = new URLSearchParams();

        params.append('name', this.state.name);
        params.append('age', this.state.age);
        params.append('desc', this.state.desc);
        params.append('email', this.state.email);
        params.append('github', this.state.github);

        axios.post('http://127.0.0.1:3000/api/users', params)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        let user = {
            name: this.state.name,
            age: this.state.age,
            desc: this.state.desc,
            email: this.state.email,
            github: this.state.github,
        };

        this.setState({
            name: '',
            age: '',
            desc: '',
            email: '',
            github: ''
        });

        this.props.addUserToState(user);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Full name</Label>
                    <Input value={this.state.name} onChange={this.handleNameChange}
                        type="name" name="name" id="name" placeholder="E.g. John Doe" />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input value={this.state.age} onChange={this.handleAgeChange}
                        type="age" name="age" id="age" placeholder="E.g. 42" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Personal description</Label>
                    <Input value={this.state.desc} onChange={this.handleDescChange}
                        type="textarea" name="desc" id="desc" placeholder="E.g. I hate JavaScript." />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input value={this.state.email} onChange={this.handleEmailChange}
                           type="email" name="email" id="email" placeholder="E.g. john@doe.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="github">GitHub username</Label>
                    <Input value={this.state.github} onChange={this.handleGitHubChange}
                        type="github" name="github" id="github" placeholder="E.g. John" />
                </FormGroup>
                <Button onClick={this.addUser}>Submit</Button>
            </Form>
        );
    }
}

export default ApplicationForm;