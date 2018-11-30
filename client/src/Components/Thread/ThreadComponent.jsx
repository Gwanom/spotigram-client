import React from "react";

import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import SpotigramClient from "../../Utilities/HTTPHelper";
import { ProfileRender } from "../Renders/ProfileRender";
import { ThreadRender } from "../Renders/ThreadRender";


export class ThreadComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            viewable: false,
            name: null,
            replies: null,
            val:null
        }
    }
    componentDidMount(){
        SpotigramClient.get(`replies/parent/2`).then(
            resp=>{
                this.setState({
                    ...this.state,
                    viewable:true,
                    replies: resp.data,
                    name:resp.data[0].parent.author.username,
                    content:resp.data[0].parent.content,
                    topic: resp.data[0].parent.topicSong.title
                })
            })
    }

    checkStatus(){
        console.log(this.state);
        // let parent = this.state.replies[0].parent
        // console.log(parent);
    }

    render(){
        return(
            <React.Fragment>
                {/* <div>
                    <p>{this.state.name} said {this.state.topic}</p>
                    {
                        this.state.viewable === true &&
                        this.state.replies.map(replies=>replies.content)
                    }
                </div> */}
                {
                    this.state.viewable === true &&
                    this.checkStatus()
                }
                <p>Replies for {this.state.name}'s post about {this.state.topic}</p>
                <div className="Threads">
                    {
                        this.state.viewable === true &&
                         this.state.replies.map(replies =>
                            <ThreadRender key={replies.profileId} reply={replies}/>

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
        userThreads: state.userReducer.storeThreads,
        threadID: state.userReducer.identifier
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData,
    storeThreads: userAction.storeThreads,
    storeThreadID: userAction.storeThreadID
}


export default connect(mapStateToProps,mapDispatchToProps)(ThreadComponent);
