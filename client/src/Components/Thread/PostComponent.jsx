import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent from "../Users/ProfileComponent";
import { ReplyComponent } from "./ReplyComponent";
import { NewReplyComponent } from "./NewReplyComponent";
import PropTypes from 'prop-types';
import SpotigramClient from "../../Utilities/HTTPHelper";

export class PostComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            replies: null,
            post: null,
            visible: false
        }
    }


    componentDidMount() {
        SpotigramClient.get(`replies/parent/${this.props.post.postId}`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    replies: resp.data,
                    visible: true
                })
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="border border-info rounded post-container">
                    <p className="main-post-content">{this.props.post.content}</p>
                    {
                        this.state.visible === true &&
                        this.state.replies.map(replies =>
                            <ReplyComponent key={replies.replyId} author={replies.author.username} content={replies.content} />)
                    }
                    <NewReplyComponent id={this.props.id} user={this} /><br />
                    <span className="tags">#{this.props.post.topicSong.songTitle}, #{this.props.post.topicArtist.name}, #{this.props.post.topicAlbum.title}</span>
                </div>
            </React.Fragment>
        )
    }
}

PostComponent.propTypes = {
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        userData: state.userReducer
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);