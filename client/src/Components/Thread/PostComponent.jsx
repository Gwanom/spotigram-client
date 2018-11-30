import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent  from "../Users/ProfileComponent";
import {ReplyComponent} from "./ReplyComponent";
import {NewReplyComponent} from "./NewReplyComponent";
import PropTypes from 'prop-types';

export class PostComponent extends React.Component{
    constructor(props) {
        this.setState({
            post: null
        })
    }


    componentDidMount() {
        fetch(`http://spotigram-env-1.m2phmu28yw.us-east-2.elasticbeanstalk.com/posts/${this.post.id}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                post: data
            })
        })
        fetch(`http://spotigram-env-1.m2phmu28yw.us-east-2.elasticbeanstalk.com/replies/parent/${this.post.id}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                replies: data
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                Subject: {this.state.post.topicSong.songTitle} by {this.state.post.topicArtist.name}, from the album {this.state.post.topicAlbum.title}
                By: {this.state.post.author.username}
                {this.state.post.content}
                {this.state.replies.map(replies => 
                    <ReplyComponent author={replies.author.username} content={replies.content}/>)}
                {/* <NewReplyComponent id={this.props.id} user={this}/> */}
            </React.Fragment>           
        )
    }
}

PostComponent.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired
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

export default connect(mapStateToProps,mapDispatchToProps)(PostComponent);