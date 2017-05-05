import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container } from 'reactstrap';

class Applicants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            repos: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.github}/repos`)
            .then(res => {
                const repos = res.data.map(obj => obj);
                this.setState({ repos });
            });


        axios.get(`http://127.0.0.1:3000/api/users`)
            .then(res => {
                const users = res.data.map(obj => obj);
                console.log(users);
                this.setState({ users });
            });

    }

    render() {
        return (
            <Container>
                <div>
                    <br/>
                    <h1>Applications</h1>
                    <br/>
                    <h3>Ruben Das</h3>
                    <h6>GitHub Repos</h6>
                    <ul>
                        {this.state.repos.map(repos =>
                            <li key={ repos.id }><a href={ repos.html_url }>{ repos.name } - { repos.description }</a></li>
                        )}
                    </ul>
                </div>
            </Container>
        );
    }
}

ReactDOM.render(
    <Applicants github="rubda"/>,
    document.getElementById('root')
);

export default Applicants;
