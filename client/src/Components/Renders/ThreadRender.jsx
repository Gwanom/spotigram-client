import React from "react";


export class ThreadRender extends React.PureComponent{
    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <li>
                    
                        <span>
                            {this.props.reply.author.username}
                        </span> said:  {this.props.reply.content}
                    
                </li>
            </React.Fragment>
        )
    }
}