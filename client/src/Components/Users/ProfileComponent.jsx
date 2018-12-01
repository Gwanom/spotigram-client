import React from 'react';

import NavbarComponent  from '../NavbarComponent';
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import SpotigramClient from "../../Utilities/HTTPHelper";
import PostsComponent from "../Thread/PostsComponent"

export class ProfileComponent extends React.PureComponent {

    
    render() {
        return (
            <React.Fragment>
                {/* <NavbarComponent user_data={this.props.userData.userEntries.info[0]}/> */}
                <div className="">
                    <PostsComponent type="user" value={this.props.userData.userEntries.username} />
                </div>
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