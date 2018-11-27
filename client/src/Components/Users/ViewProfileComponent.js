import React from "react";

export class ViewProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="viewProfile">
                    Username: {this.props.user.username}<br />
                    Name: {this.props.user.firstName} {this.props.user.lastName}<br />
                    Email: {this.props.user.email}<br />
                    Banned: {this.props.user.isbanned}<br />
                    Last Logged In: {this.props.user.lastLogin}
                </div>
            </React.Fragment>
        )
    }
}