import React from "react";
// import {Link} from "react-router";

export class EditProfileComponent extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="profile_div">
                    <form className="edit_profile_form">
                        <div className="form-group">
                            <label htmlFor="usernameInput">Username</label>
                            <input type="text" className="form-control" id="usernameInput" placeholder={this.state.user.username} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstNameInput">First Name</label>
                            <input type="text" className="form-control" id="firstNameInput" placeholder={this.state.user.firstName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastNameInput">Last Name</label>
                            <input type="text" className="form-control" id="lastNameInput" placeholder={this.state.user.lastName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email</label>
                            <input type="email" className="form-control" id="emailInput" placeholder={this.state.user.email} />
                        </div>
                        {/* <Link to="/users/password"> */}
                            {/* <button type="button" className="btn btn-secondary">Change Password</button> */}
                        {/* </Link> */}
                        <button type="button" class="btn btn-primary">Save Profile</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}