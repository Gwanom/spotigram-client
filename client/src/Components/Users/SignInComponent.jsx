import React from "react";
import { connect } from "react-redux";
import {BrowserRouter,Route, Switch} from "react-router-dom";

import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent  from "./ProfileComponent";


export class SignInComponent extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            failed:false,
            success:false
        };
        this.props.storeData(null);
    
    }

    passwordChange = (e) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    nameChange = (e) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    login = (event) => {
        event.preventDefault();

        var cred;
        if (this.state.name.includes("@")) {
            var email = this.state.name;
            cred = {
                email,
                password: this.state.password
              }
        } else {
            const username = this.state.name;
            cred = {
                username,
                password: this.state.password
              }
        }

        fetch('http://localhost:8088/users/login', {
            method: 'POST',
            body: JSON.stringify(cred),
            headers: {
            'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(resp=>{
            if(resp.status === 200){
                this.setState({
                    ...this.state,
                    failed:false
                })
                resp.json().then(r=>{
                    this.props.storeData(r.info);
                    console.log(this.props.userData);
                    this.setState({
                        ...this.state,
                        success:true
                    })
                    window.location = "/profile";
                })
            }else{
                this.setState({
                    ...this.state,
                    failed:true
                })
            }
        })
    }

    // POST credential with either username OR email fields, followed by password field

    render(){
        return(
            <React.Fragment>
                <div className="login_div">
                    <form className="login_form" onSubmit={this.login}>
                        <div className="form-group">
                            <input type="text" title="Enter username or email address" placeholder="Username or Email" autoComplete="false"  className="form-control" id="inputEmail" 
                            required value={this.state.name} onChange={this.nameChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" autoComplete="false" id="inputPassword" 
                            required value={this.state.password} onChange={this.passwordChange}></input>
                        </div>   
                        <button type = "submit">Log In</button>                
                        <small><a className="nav-link" href="/forgot">Forgot Password</a></small>
                    </form>
                    {
                            (this.state.failed === true) &&
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Wrong Password</strong>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                     <span aria-hidden="true">&times;</span>
                                 </button>
                            </div>
                    }              
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        userData: state.userReducer
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInComponent);