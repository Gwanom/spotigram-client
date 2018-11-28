<<<<<<< HEAD
import React from "react";

export class NavbarComponent extends React.Component{
    // Need to get username
    // If following is implemented, also need to get updates from followed users/threads/songs/artists

    constructor(props) {
        super(props);
        this.state = {searchField: ''};
    
        this.search = this.search.bind(this);
    }

    search(event) {
        alert('A search was submitted for: ' + this.state.searchField);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand">
                    <img src="UserIcon.png" width="30" height="30" alt="" href="./user-profile"/>
                    </a>
                    <a class="navbar-brand" href="./user-profile">Urnamir</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Logout</a>
                        </li>
                        <li class="divider"></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Latest Updates
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Post by Somebody</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">5 posts about Song of Something Else</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">7 posts about The Artist</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <select class="form-control" id="sel1" value={this.state.searchField}>
                                <option>Users</option>
                                <option>Albums</option>
                                <option>Songs</option>
                            </select>
                        <button onClick={search} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
=======
import React from "react";

export class NavbarComponent extends React.Component{
    // Need to get username
    // If following is implemented, also need to get updates from followed users/threads/songs/artists

    constructor(props) {
        super(props);
        this.state = {searchField: ''};
    
        this.search = this.search.bind(this);
      }

    search(event) {
        alert('A search was submitted for: ' + this.state.searchField);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand">
                    <img src="UserIcon.png" width="30" height="30" alt="" href="./user-profile"/>
                    </a>
                    <a class="navbar-brand" href="./user-profile">Urnamir</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Logout</a>
                        </li>
                        <li class="divider"></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Latest Updates
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Post by Somebody</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">5 posts about Song of Something Else</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">7 posts about The Artist</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <select class="form-control" id="sel1" value={this.state.searchField}>
                                <option>Users</option>
                                <option>Albums</option>
                                <option>Songs</option>
                            </select>
                        <button onClick={search} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
>>>>>>> 529d8aa3d1f90cad33b24f67587e3bd1982fe19d
}