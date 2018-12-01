import React from "react";
import {SignUpComponent} from "./SignUpComponent";
import SignInComponent  from "./SignInComponent";
import Background from '../LoginBackground.png';


export class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            signin:<SignInComponent history={this.props.history}/>,
            signup:<SignUpComponent/>,
            item: "signin"
        }
        localStorage.removeItem("state");
    }

    getPage =(e)=>{
        this.setState({
            ...this.state,
            item:e.target.value
        })

    }

    render(){
        return(
            <React.Fragment>    
                <div className="homePage">
                    <div  id="login_buttons" role="group">
                            <button type="button" value="signin" onClick={this.getPage} className="btn btn-secondary">SignIn</button>
                            <div className="divider"></div>
                            <button type="button" value="signup" onClick={this.getPage} className="btn btn-secondary">Register</button>
                    </div>
                        { (this.state.item === "signin") && this.state.signin }
                        { (this.state.item === "signup") && this.state.signup }
                </div>
            </React.Fragment>
        )
    }



}

export default(HomeComponent)