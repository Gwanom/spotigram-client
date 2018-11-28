import React from "react";

export class SignInComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: '',
                    password: ''};
    
        //this.login = this.login.bind(this);
    }

    passwordChange = (e) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    nameChange = (e) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    login=(event) => {
        //alert('A login was submitted for: ' + this.state.name);
        //console.log('A login was submitted for: ' + this.state.name);
        var cred;
        if (this.state.name.includes("@")) {
            var email = this.state.name;
            cred = {
                email,
                password: this.state.password
              }
        } else {
            const username = this.state.name;
            cred = {
                username,
                password: this.state.password
              }
        }

        fetch('http://localhost:8088/users/login', {
            method: 'POST',
            body: JSON.stringify(cred),
            headers: {
            'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(resp => resp.json()).then(resp=>{
            console.log(resp);
            console.log(resp.info[0].username);
        })
        .catch(err => {
          console.log(err);
        });

        event.preventDefault();
    }

    // POST credential with either username OR email fields, followed by password field

    render(){
        return(
            <React.Fragment>
                <div className="login_div">
                    <form className="login_form" onSubmit={this.login}>
                        <div className="form-group">
                            <input type="text" title="Enter username or email address" placeholder="Username or Email" autoComplete="false"  className="form-control" id="inputEmail" 
                            required value={this.state.name} onChange={this.nameChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" autoComplete="false" id="inputPassword" 
                            required value={this.state.password} onChange={this.passwordChange}></input>
                        </div>   
                        <button type = "submit">Log In</button>                
                        <small><a className="nav-link" href="/forgot">Forgot Password</a></small>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

