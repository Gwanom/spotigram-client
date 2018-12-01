import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent  from "../Users/ProfileComponent";
import {PostComponent} from "./PostComponent";
import PropTypes from 'prop-types';
import SpotigramClient from "../../Utilities/HTTPHelper";

export class PostsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            value: "",
            posts: null,
            visible: false
        }
    }
    
    componentDidMount() {
            console.log(this.props);
            let path = "";
            if (this.props.value !== undefined) {
                switch (this.props.type) {
                    case "song":
                        path = `/songs/title/${this.props.value}`;
                        break;
                    case "album":
                        path = `/albums/title/${this.props.value}`;
                        break;
                    case "artist":
                        path = `/artists/name/${this.props.value}`;
                        break;
                    case "user":
                        path = `/posts/author/${this.props.value}`;
                        break;
                    default:
                        break;
                }
                SpotigramClient.get(path)
                .then(
                    resp=>{
                        this.props.storeThreads(resp.data);
                        this.setState({
                            ...this.state,
                            posts: resp.data,
                            visible: true
                        })
                });
        }
    }
    
    render() {
        return (
            <React.Fragment>
                {
                    this.state.visible &&
                    this.props.userData.threadEntries.map(replies => 
                        <PostComponent key={replies.postId} post={replies}/>)
                }
            </React.Fragment>
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

export default connect(mapStateToProps,mapDispatchToProps)(PostsComponent);