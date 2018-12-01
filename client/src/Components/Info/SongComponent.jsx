import React from "react";
import './profile.css';
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import SpotigramClient from "../../Utilities/HTTPHelper";
import PostsComponent from "../Thread/PostsComponent"

export class SongComponent extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="song-info">
                    {this.props.title} is a song by {this.props.artist}<br />
                    {this.props.title} is on the album {this.props.album}<br />
                    Here are some posts about it:<br />
                    <PostsComponent type="song" value={this.props.title} />
                </div>
            </React.Fragment>           
        )
    }
}

SongComponent.propTypes = {
    title: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
}

const mapStateToProps = (state) =>{
    return{
        userData: state.userReducer
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData
}

export default connect(mapStateToProps,mapDispatchToProps)(SongComponent);