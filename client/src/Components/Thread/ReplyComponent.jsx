import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";
import ProfileComponent  from "../Users/ProfileComponent";
import PropTypes from 'prop-types';

export class ReplyComponent extends React.Component{

    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                {this.props.author} says "{this.props.content}"<br />
            </React.Fragment>           
        )
    }
}

ReplyComponent.propTypes = {
    reply: PropTypes.shape({
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
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

export default connect(mapStateToProps,mapDispatchToProps)(ReplyComponent);