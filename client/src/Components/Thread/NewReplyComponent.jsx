import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent  from "../Users/ProfileComponent";
import PropTypes from 'prop-types';
import SpotigramClient from "../../Utilities/HTTPHelper";

export class NewReplyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            user: 0,
            content: null
        }
    }
    
    setContent = (event) => {
        this.setState({
            ...this.state,
            content: event.target.value
        })
    }

    submitReply = (event) => {
        event.preventDefault();
        
        let reply = {
            "parent": {
                "postId": this.props.id.postId
            },
            "author": {
                "userID": this.props.userData.userEntries.userID
            },
            "content": this.state.content
        }
        SpotigramClient.post("/replies",reply)
        // fetch("http://spotigram-env-1.m2phmu28yw.us-east-2.elasticbeanstalk.com/replies", {
        //     method: 'POST',
        //     body: JSON.stringify(reply),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include'
        // })
    }

    render() {
        return (
            <React.Fragment>
                <div className="input-group mb-3 new-reply">
                    <input type="text" className="form-control" aria-label="New Reply" onChange={this.setContent}/>
                    <button  onClick={this.submitReply} type="button" className="btn btn-outline-secondary">Reply</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(NewReplyComponent);