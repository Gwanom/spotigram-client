import React from "react";
import {SignUpComponent} from "./SignUpComponent";
import { SignInComponent } from "./SignInComponent";

export class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            signin:<SignInComponent/>,
            signup:<SignUpComponent/>,
            item: "signin"
        }
    }

    getPage =(e)=>{
        this.setState({
            ...this.state,
            item:e.target.value
        })

    }

    render(){
        return(
            <>
                <div className="homePage">
                    <div  id="login_buttons" role="group">
                        {/* <label><input value="signin" onChange={this.getPage} type="radio" name="optradio" defaultChecked/>Sign In</label> */}
                        {/* <label><input value="signup" onChange={this.getPage} type="radio" name="optradio"/>Register</label> */}
                        <button type="button" value="signin" onClick={this.getPage} className="btn btn-secondary">SignIn</button>
                        <div className="divider"></div>
                        <button type="button" value="signup" onClick={this.getPage} className="btn btn-secondary">Register</button>
                    </div>
                    { (this.state.item === "signin") && this.state.signin }
                    { (this.state.item === "signup") && this.state.signup }
                </div>
            </>
        )
    }



}