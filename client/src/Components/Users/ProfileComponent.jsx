import React from 'react';

// import NavbarComponent from '../NavbarComponent';
import * as userAction from "../../Redux/Actions/User.Actions";
import { connect } from "react-redux";
import PostsComponent from "../Thread/PostsComponent"
import UsersRepliesComponent from '../Thread/Users.Replies.Component';

export class ProfileComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            view: "posts"
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <NavbarComponent user_data={this.props.userData.userEntries.info[0]}/> */}
                <div className="profile-header">
                    {this.props.userData.userEntries.username} <br />
                    {this.props.userData.userEntries.firstName} {this.props.userData.userEntries.lastName} <br />
                    {this.props.userData.userEntries.email} <br />
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary">Posts</button>
                        <button type="button" class="btn btn-secondary">Replies</button>
                    </div>
                </div>
                <div className="profile-posts">
                    {
                        (this.state.view === "posts") &&
                        <PostsComponent type="user" value={this.props.userData.userEntries.username} />
                    }
                    {
                        (this.state.view === "replies") &&
                        <UsersRepliesComponent type="user" value={this.props.userData.userEntries.username} />
                    }
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.userReducer
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);