import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../Redux/Actions/User.Actions";

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
const mapStateToProps = (state) =>{
    return{
        userData: state.userReducer.userEntries,
        authentication:state.userReducer.auth
    }
}

const mapDispatchToProps = {
    storeData: userAction.storeData,
    storeAuth: userAction.storeAuth
}

export default connect(mapStateToProps,mapDispatchToProps)(PostComponent);