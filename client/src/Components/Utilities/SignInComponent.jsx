import React from "react";

export class SignInComponent extends React.Component{
    render(){
        return(
            <>
                <div className="login_div">
                    <form className="login_form">
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="text" title="Enter username or email" autoComplete="false"  className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" autoComplete="false" id="inputPassword"></input>
                        </div>   
                        <small><a className="forgotPassword" href="#">Forgot Password</a></small>                
                    </form>
                </div>
            </>
        )
    }
}

