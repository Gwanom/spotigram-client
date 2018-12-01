import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent  from "./ProfileComponent";
import {ReplyComponent} from "./ReplyComponent";
import PropTypes from 'prop-types';

export class NewReplyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            id: 0,
            user: 0,
            content: null
        })
    }
    
    setContent = (event) => {
        this.setState({
            ...this.state,
            content: event.target.value
        })
    }

    submitPost = (event) => {
        event.preventDefault();
        let post = {
            "postId": 0,
            "author": {
                "userID": 
            },
            "topicSong": {
                "songId": 
            },
            "topicAlbum": {
                "id": 
            },
            "topicArtist": {
                "id":
            },
            "content": 
        }
        fetch("http://spotigram-env-1.m2phmu28yw.us-east-2.elasticbeanstalk.com/posts", {
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
                    <div class="input-group-prepend">
                        <span class="input-group-text">New Reply</span>
                    </div>
                    <textarea class="form-control" aria-label="New Reply" onChange={this.setContent}/>
                    <button type="button" class="btn btn-outline-secondary">Submit Reply</button>
                </div>
            </React.Fragment>
        )
    }
}

NewPostComponent.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired;
        user: PropTypes.number.isRequired;
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

export default connect(mapStateToProps,mapDispatchToProps)(NewPostComponent);