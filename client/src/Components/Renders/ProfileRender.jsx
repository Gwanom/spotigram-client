import React from 'react';
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import  RepliesRender  from './RepliesRender';

export class ProfileRender extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hidden:"hidden"
        }

    }
    getPosts = (e) =>{
        console.log("clicked");
        console.log(this.props.userData);
    }
    showReplies = (event) =>{
        this.setState({
            hidden: (this.state.hidden === "hidden") ? "show": "hidden"
        })
    }

    render(){
        console.log(this.props);
        return(
            <>
                <ul className="myUL">
                    {/* <li><span onClick={this.showReplies} className="caret">Me: {this.props.username}</span></li> */}
                    <ul className={this.state.hidden}>
                        {
                            this.props.userData.threadEntries.map(threadReplies=>
                                console.log(threadReplies)
                                // <RepliesRender history={this.props.history} key={threadReplies.replyId} identifier={threadReplies.parent.postId} reply={threadReplies}/>
                            )
                        }   
                    </ul>
                </ul>
            </>
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


export default connect(mapStateToProps,mapDispatchToProps)(ProfileRender);