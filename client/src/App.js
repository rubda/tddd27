import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container } from 'reactstrap';

import Header from "./components/Header";
import Applicant from "./components/Applicant";
import GitHub from "./components/GitHub";
import Contacted from "./components/Contacted";
import Favourite from "./components/Favourite";

class Applicants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:3000/api/users`)
            .then(res => {
                const users = res.data.map(obj => obj);
                this.setState({ users });
            });
    }

    render() {
        return (
            <Container>
                <Header/>
                <div>
                    {this.state.users.map(users =>
                        <div key={ users._id } className="row text-center" style={{ padding: '0 0 15px 0' }}>
                            <div className="col-lg-3"><Applicant name={ users.name } desc={ users.desc }/></div>
                            <div className="col-lg-3"><GitHub github={ users.github }/></div>
                            <div className="col-lg-3"><Contacted contacted={ users.contacted }/></div>
                            <div className="col-lg-3"><Favourite contacted={ users.favourite } /></div>
                        </div>
                    )}
                </div>
            </Container>
        );
    }
}

ReactDOM.render(
    <Applicants/>,
    document.getElementById('root')
);

export default Applicants;
