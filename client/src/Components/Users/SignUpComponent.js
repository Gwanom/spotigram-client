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
        console.log(event.target);

    }


    render(){
        return(
            <React.Fragment>
                <div className="register_div">
                    <form className="register_form" onSubmit={this.registerUser}>
                        <div className="form-group" id="first_group">
                            <input type="text" required placeholder="First Name"   autoComplete="false"  className="form-control" id="firstName"/>
                            <input type="text" required placeholder="Last Name"  autoComplete="false"  className="form-control" id="lastName"/>
                            <input typeof="email" pattern=".+@.*" required placeholder="Email"  autoComplete="false"  className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group" id="second_group">
                            <input type="text" required placeholder="Username" title="Enter username or email" autoComplete="false"  className="form-control" id="inputUsername"/>
                            <input type="password" required onChange={this.setPassword} placeholder="Password" className="form-control" autoComplete="false" id="inputPassword"></input>
                            <input type="password" required onChange={this.checkIfPasswordMatch} placeholder="Confirm Password" className="form-control" autoComplete="false" id="confirmPassword"></input>
                        </div>
                        <button type="submit" className="btn btn-success" >Register</button>
                    </form>
                    <small className="text-danger" >{this.state.status}</small>

                </div>
            </React.Fragment>
        )
    }
}