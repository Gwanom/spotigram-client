import React from 'react';
import { connect } from 'react-redux';
import * as userAction from "../../Redux/Actions/User.Actions";

export class BadPassword extends React.Component {
    render() {
        return (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Wrong Password</strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BadPassword);
