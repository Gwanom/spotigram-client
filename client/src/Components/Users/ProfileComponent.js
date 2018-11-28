import React from 'react';
import {ViewProfileComponent} from "./ViewProfileComponent.js";
import {EditProfileComponent} from "./EditProfileComponent.js";

export class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewProfile: <ViewProfileComponent data={this.state.user}/>,
            editProfile: <EditProfileComponent data={this.state.user}/>,
            item: "view"
        }
    }

    getPage = (e) => {
        this.setState({
            ...this.state,
            item: e.target.value
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="profilePage">
                    <div id="profile_buttons" role="group">
                        <button type="button" value="viewProfile" onClick={this.getPage} className="btn btn-secondary">View Profile</button>
                        <div className="divider"></div>
                        <button type="button" value="editProfile" onClick={this.getPage} className="btn btn-secondary">Edit Profile</button>
                    </div>
                    { (this.state.item === "viewProfile") && this.state.viewProfile }
                    { (this.state.item === "editProfile") && this.state.editProfile }
                </div>
            </React.Fragment>
        )
    }
}