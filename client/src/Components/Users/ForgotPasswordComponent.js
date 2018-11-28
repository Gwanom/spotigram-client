import React from "react";
import '../../App.css';

export class ForgotPasswordComponent extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="login_div">
                    <form className="login_form">
                        <input type="text" className="form-control" placeholder="Enter email to recover"/>
                        <button type="button" class="btn btn-primary mt-3">Recover Password</button>
                    </form>
                </div>
            </React.Fragment>           
        )
    }
}