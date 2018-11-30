import React from "react";
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";

export class RepliesRender extends React.PureComponent{

    goToThread = (event) =>{
        console.log(this.props.identifier);
        this.props.storeThreadID(this.props.identifier)
        this.props.history.push("/thread")

    }

    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <li>
                    <a onClick={this.goToThread}>
                        <span>
                            {this.props.reply.author.username}
                        </span> said:  {this.props.reply.content}
                    </a>
                </li>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        userData: state.userReducer,
        userThreads: state.userReducer.storeThreads,
        threadID: state.userReducer.identifier
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData,
    storeThreads: userAction.storeThreads,
    storeThreadID: userAction.storeThreadID
}


export default connect(mapStateToProps,mapDispatchToProps)(RepliesRender);