import React from "react";

export class ViewProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="viewProfile">
                    Username: {this.state.user.username}<br />
                    Name: {this.state.user.firstName} {this.props.user.lastName}<br />
                    Email: {this.state.user.email}<br />
                    Banned: {this.state.user.isbanned}<br />
                    Last Logged In: {this.state.user.lastLogin}
                </div>
            </React.Fragment>
        )
    }
}