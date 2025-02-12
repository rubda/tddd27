import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import ApplicationForm from "./ApplicationForm";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarBrand href="/">TDDD27 - Applicants</NavbarBrand>
                    <Nav className="mr-auto p2" navbar>
                        <NavItem>
                            <InputGroup>
                                <Input value={this.props.value} onChange={this.props.onChange}
                                       placeholder="Search for an applicant" style={{ width: "400px" }}/>
                                <InputGroupAddon><FontAwesome name="search"/></InputGroupAddon>
                            </InputGroup>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={this.toggle}>
                                Add application
                                <FontAwesome className="fa-fw" name="plus-square"/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add application</ModalHeader>
                    <ModalBody>
                        <ApplicationForm/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default NavBar;