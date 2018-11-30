import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent  from "./ProfileComponent";
import {PostComponent} from "./PostComponent";
import PropTypes from 'prop-types';

export class PostsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            value: "",
            posts: null
            
        }
    }
    
    componentDidMount() {
        switch (this.props.value) {
            let path = ""
            case "song":
                path = `/songs/title/${this.state.value}`;
                break;
            case "album":
                path = `/albums/title/${this.state.value}`;
                break;
            case "artist":
                path = `/artists/name/${this.state.value}`;
                break;
            case "user":
                path = `/posts/author/${this.state.value}`;
                break;
        }
        fetch(`http://spotigram-env-1.m2phmu28yw.us-east-2.elasticbeanstalk.com${path}`)
        .then(resp => resp.json())
        .then(data => {
            posts: data
        })
    }
    
    render() {
        return (
            <React.Fragment>
                {this.state.replies.map(replies => 
                    <PostComponent post={this.state.posts}>)}
            </React.Fragment>
        )
    }
}

PostsComponent.propTypes = {
    type: PropTypes.shape({
        type: PropTypes.string.isRequired;
        value: PropTypes.string.isRequired;
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

export default connect(mapStateToProps,mapDispatchToProps)(PostsComponent);