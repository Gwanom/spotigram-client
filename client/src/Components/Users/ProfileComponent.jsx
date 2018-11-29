import React from 'react';

// import { NavbarComponent } from '../NavbarComponent';
// import {ViewProfileComponent} from "./ViewProfileComponent.js";
// import {EditProfileComponent} from "./EditProfileComponent.js";
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";

export class ProfileComponent extends React.PureComponent {

    
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                {/* <NavbarComponent user_data={this.state.item}/> */}
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


export default connect(mapStateToProps,mapDispatchToProps)(ProfileComponent);