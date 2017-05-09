import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ApplicationForm extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Full name</Label>
                    <Input type="name" name="name" id="name" placeholder="E.g. John Doe" />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input type="age" name="age" id="age" placeholder="E.g. 42" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="E.g. john@doe.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Personal description</Label>
                    <Input type="textarea" name="desc" id="desc" placeholder="E.g. I hate JavaScript." />
                </FormGroup>
                <FormGroup>
                    <Label for="github">GitHub username</Label>
                    <Input type="github" name="github" id="github" placeholder="E.g. John" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default ApplicationForm;