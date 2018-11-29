import React from "react";

export class SignUpComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password: null,
            status:null,
            email:null,
            username:null,
            firstname:null,
            lastname:null
        }
    }


    setPassword = (event) =>{
        this.setState({
            ...this.state,
            password:event.target.value
        })
    }

    checkIfPasswordMatch = (event) =>{
        console.log(event.target.value)
        if(event.target.value !== this.state.password){
            this.setState({
                ...this.state,
                status:"Passwords do not match"
            })
        }
        else{
            this.setState({
                ...this.state,
                status:null,
                password:event.target.value
            })
        }
    }

    registerUser=(event)=>{
        event.preventDefault();
        let newUser = {
            "username": this.state.username,
            "password": this.state.password,
            "firstName": this.state.firstname,
            "lastName": this.state.lastname,
            "email": this.state.email 
        }
        fetch("http://spotigram-env-1.m2phmu28yw.us-east-2.elasticbeanstalk.com/users/register", {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }

    setFirstname = (event) => {
        this.setState({
            ...this.state,
            firstname: event.target.value
        })
    }

    setLastname = (event) => {
        this.setState({
            ...this.state,
            lastname: event.target.value
        })
    }

    setEmail = (event) => {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    }

    setUsername = (event) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }


    render(){
        return(
            <React.Fragment>
                <div className="register_div">
                    <form className="register_form" onSubmit={this.registerUser}>
                        <div className="form-group" id="first_group">
                            <input type="text" required placeholder="First Name"   autoComplete="false"  className="form-control" id="firstName" onChange={this.setFirstname}/>
                            <input type="text" required placeholder="Last Name"  autoComplete="false"  className="form-control" id="lastName"onChange={this.setLastname}/>
                            <input typeof="email" pattern=".+@.*" required placeholder="Email"  autoComplete="false"  className="form-control" id="inputEmail" onChange={this.setEmail}/>
                        </div>
                        <div className="form-group" id="second_group">
                            <input type="text" required placeholder="Username" title="Enter username or email" autoComplete="false"  className="form-control" id="inputUsername" onChange={this.setUsername}/>
                            <input type="password" required onChange={this.setPassword} placeholder="Password" className="form-control" autoComplete="false" id="inputPassword"></input>
                            <input type="password" required onChange={this.checkIfPasswordMatch} placeholder="Confirm Password" className="form-control" autoComplete="false" id="confirmPassword"></input>
                        </div>
                        <button type="submit" className="btn btn-success">Register</button>
                    </form>
                    <small className="text-danger" >{this.state.status}</small>

                </div>
            </React.Fragment>
        )
    }
}