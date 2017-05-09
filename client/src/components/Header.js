import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1 style={{ padding: "20px" }}>Applications</h1>
                <div className="row text-center">
                    <div className="col-lg-3"><h5>Applicant</h5></div>
                    <div className="col-lg-3"><h5>GitHub</h5></div>
                    <div className="col-lg-3"><h5>Contacted</h5></div>
                    <div className="col-lg-3"><h5>Favourite</h5></div>
                </div>
            </div>
        );
    }
}

export default Header;
