import React from 'react';

import NavbarComponent  from '../NavbarComponent';
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import SpotigramClient from "../../Utilities/HTTPHelper";
import  ProfileRender  from '../Renders/ProfileRender';

export class ProfileComponent extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
    }



    componentDidMount(){
        console.log(this.props.userData);
        console.log(this.props.userData.userEntries.username);
        SpotigramClient.get(`posts/author/${this.props.userData.userEntries.username}`).then(
            resp=>{
                this.props.storeThreads(resp.data);
                this.setState({
                    ...this.state,
                    visible:true
                })
            })
        
    }
    
    render() {
        console.log(this.props.userData.threadEntries);
        return (
            <React.Fragment>
                {/* <NavbarComponent user_data={this.props.userData.userEntries.username}/> */}
                <p>Replies</p>
                <div className="Threads">
                    {
                        this.state.visible === true &&
                         this.props.userData.threadEntries.map(replies =>
                            // console.log(replies.postId)
                                <ProfileRender history={this.props.history} key={replies.postId} username={this.props.userData.userEntries.username} identifier={replies.postId} reply={replies}/>

                            )
                    }
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        userData: state.userReducer,
        userThreads: state.userReducer.storeThreads
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData,
    storeThreads: userAction.storeThreads
}


export default connect(mapStateToProps,mapDispatchToProps)(ProfileComponent);