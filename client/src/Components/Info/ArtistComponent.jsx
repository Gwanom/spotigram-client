import React from "react";
import './profile.css';
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import SpotigramClient from "../../Utilities/HTTPHelper";
import PostsComponent from "../Thread/PostsComponent"

export class ArtistComponent extends React.Component{

    render(){
        return(
            <React.Fragment>
                {this.props.artist.name} is an artist.
                {this.props.artist.name} began performing in {this.props.artist.startDate} and ended performing in {this.props.artist.endDate}.<br />
                Here are some posts about {this.props.artist.name}:<br />
                <PostsComponent type="artist" value={this.props.artist.name}/>
            </React.Fragment>           
        )
    }
}

ArtistComponent.propTypes = {
    artist: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>{
    return{
        userData: state.userReducer
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistComponent);