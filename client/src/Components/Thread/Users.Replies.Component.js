import React from 'react';
import { connect } from 'react-redux';
import * as userAction from "../../Redux/Actions/User.Actions";

export class MyReplies extends React.Component {
    

    render() {
        return (
            <>
                {this.props.userData.userEntries.username} 
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userReducer.userEntries,
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyReplies);