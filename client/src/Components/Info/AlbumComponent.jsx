import React from "react";
import './profile.css';
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import SpotigramClient from "../../Utilities/HTTPHelper";
import PostsComponent from "../Thread/PostsComponent"

export class AlbumComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            songs: null
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.props.album} is an album by {this.props.artist}<br />
                Here are some posts about it:<br />
                <PostsComponent type="album" value={this.props.album}/>
            </React.Fragment>           
        )
    }
}

AlbumComponent.propTypes = {
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

export default connect(mapStateToProps,mapDispatchToProps)(AlbumComponent);