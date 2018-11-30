import React from "react";
import { connect } from "react-redux";

import * as userAction from "../../Redux/Actions/User.Actions";
import SpotigramClient from "../../Utilities/HTTPHelper";
// import ProfileComponent  from "./ProfileComponent";


export class SignInComponent extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            failed:false,
        };
        //this.props.storeData(null);
    
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
        let creds = {
            password:this.state.password
        }
        // if this.state.name has a @ then it means that it is an email, else a username
        // we then assign this.state.name to that value to be passed as credentials
        creds[String((this.state.name.includes("@") === true) ? "email" : "username")] = this.state.name
        console.log("hello");
        SpotigramClient.post("/users/login",creds).then(
            resp=>{
                if(resp.status === 200){
                    console.log(resp);
                    SpotigramClient.defaults.headers.common['Authorization'] = resp.headers.authentication;
                    this.setState({
                        ...this.state,
                        failed:false
                    })
                    this.props.storeData(resp.data);
                    // this.props.storeAuth(resp.data.replies);
                    window.location = "/profile";
                }
                else{
                    this.setState({
                        ...this.state,
                        failed:true
                    })
                }
                
                
            })

        // fetch('http://localhost:8088/users/login', {
        //     method: 'POST',
        //     body: JSON.stringify(creds),
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     credentials: 'include'
        // }).then(resp=>{
        //     if(resp.status === 200){
        //         this.setState({
        //             ...this.state,
        //             failed:false
        //         })
        //         resp.json().then(r=>{
        //             this.props.storeData(r);
        //             this.props.storeAuth(resp.headers.get("authentication"));
        //             this.setState({
        //                 ...this.state,
        //                 success:true
        //             })
        //             console.log(this.props.authentication);
        //             //window.location = "/profile";
        //         })
        //     }else{
        //         this.setState({
        //             ...this.state,
        //             failed:true
        //         })
        //     }
        // })
    }


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
        userData: state.userReducer.userEntries,
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData,
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInComponent);