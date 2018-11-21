import React from "react";

export class SignInComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="login_div">
                    <form className="login_form">
                        <div className="form-group">
                            <input type="text" title="Enter username or email address" placeholder="Username or Email" title="Enter username or email" autoComplete="false"  className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" autoComplete="false" id="inputPassword"></input>
                        </div>   
                        <small><a className="nav-link" href="/forgot">Forgot Password</a></small>                
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

