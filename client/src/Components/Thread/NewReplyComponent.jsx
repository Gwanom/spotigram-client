import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent  from "../Users/ProfileComponent";
import PropTypes from 'prop-types';

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
            "replyId": 0,
            "parent": {
                "postId": this.state.id
            },
            "author": {
                "userID": this.state.user
            },
            "content": this.state.content
        }
        fetch("http://spotigram-env-1.m2phmu28yw.us-east-2.elasticbeanstalk.com/replies", {
            method: 'POST',
            body: JSON.stringify(reply),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="input-group mb-3" onSubmit={this.submitReply}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">New Reply</span>
                    </div>
                    <textarea className="form-control" aria-label="New Reply" onChange={this.setContent}/>
                    <button type="button" className="btn btn-outline-secondary">Submit Reply</button>
                </div>
            </React.Fragment>
        )
    }
}

NewReplyComponent.propTypes = {
    reply: PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.number.isRequired
    })
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