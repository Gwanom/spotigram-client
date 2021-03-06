import React from "react";

import { connect } from "react-redux";

import * as userAction from "../Redux/Actions/User.Actions";

export class NavbarComponent extends React.Component{
    // Need to get username
    // If following is implemented, also need to get updates from followed users/threads/songs/artists

    constructor(props) {
        super(props);
        this.state = {
            searchField: ''
        };
    
    }

    search = (event) => {
        alert('A search was submitted for: ' + this.state.searchField);
        event.preventDefault();
    }

    logout = () =>{
        this.props.storeAuth(null);
        this.props.storeData(null);
        window.location.href = "/";
    }

    render(){
        return(
            <React.Fragment>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <label className="navbar-brand" href="/profile">Hello {this.props.user_data.firstName}</label>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Logout</a>
                        </li>
                        <li className="divider"></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Latest Updates
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/profile">Post by Somebody</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/profile">5 posts about Song of Something Else</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/profile">7 posts about The Artist</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <select className="form-control" id="sel1">
                                <option>Users</option>
                                <option>Albums</option>
                                <option>Songs</option>
                            </select>
                        <button onClick={this.logout} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        userData: state.userReducer.userEntries,
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData,
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent);