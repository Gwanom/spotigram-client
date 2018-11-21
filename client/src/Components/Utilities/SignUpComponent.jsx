import React from "react";

export class SignUpComponent extends React.PureComponent{
    render(){
        return(
            <>
                <div className="register_div">
                    <form className="register_form">
                        <div className="form-group">
                            <label htmlFor="inputEmail">First Name</label>
                            <input type="text" title="Enter username or email" autoComplete="false"  className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Last Name</label>
                            <input type="text" title="Enter username or email" autoComplete="false"  className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="text" title="Enter username or email" autoComplete="false"  className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Username</label>
                            <input type="text" title="Enter username or email" autoComplete="false"  className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" autoComplete="false" id="inputPassword"></input>
                        </div>  
                        <div className="form-group">
                            <label htmlFor="inputPassword">Confirm Password</label>
                            <input type="password" className="form-control" autoComplete="false" id="inputPassword"></input>
                        </div>  
                    </form>
                </div>
            </>
        )
    }
}