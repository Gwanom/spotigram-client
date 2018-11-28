import React from "react";
import './thread.css';

export class ThreadComponent extends React.Component{

    render(){
        return(
            <React.Fragment>
                <ul class="list-group list-holder">
                    {this.state.contents}
                </ul>
            </React.Fragment>           
        )
    }
}