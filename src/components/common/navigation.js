import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Navigation = () => {
    return (
        <nav className="navbar navbar-fixed-top navbar-default navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header"></div>
                <ul className="nav navbar-nav">
                    <li activeClassName="active">
                        <IndexLink to="/" className="btn btn-link" activeClassName="active">Home</IndexLink>
                    </li>
                    <li activeClassName="active">
                        <Link to="about" className="btn btn-link" activeClassName="active">About</Link>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li >
                        <a className="btn btn-link"><i className="glyphicon glyphicon-cog"/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
