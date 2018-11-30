import React from 'react';

import NavbarComponent  from '../NavbarComponent';
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import SpotigramClient from "../../Utilities/HTTPHelper";

export class ProfileComponent extends React.PureComponent {
    componentDidMount(){
        console.log(this.props.userData);
        SpotigramClient.get(`replies/parent/2`).then(resp=>{console.log(resp)})

    }
    
    render() {
        return (
            <React.Fragment>
                {/* <NavbarComponent user_data={this.props.userData.userEntries.info[0]}/> */}
                <div className="">
                    <p>Replies</p>

                    {
                         this.props.userData.userEntries.replies.map(replies => replies.content)
                    }
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