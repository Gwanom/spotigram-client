import React from "react";

export class PostComponent extends React.Component{

    render(){
        return(
            // responses is the combined Fragments for all the PostComponents that are responses to this PostComponent
            <React.Fragment>
                <li class="list-group-item show"><img src="UserIcon.png" class="img-circle img-thumbnail"/>
                        <article><h5>{this.state.user}</h5>{this.state.content}</article></li>
                <li class="list-group-item hide border-0"><ul class="list-group">
                    {this.state.responses}
                </ul></li>
            </React.Fragment>           
        )
    }
}