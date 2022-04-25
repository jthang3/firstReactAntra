import React from "react";
import "./Button.css";

class Button extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="btn">
                <button onClick={this.props.add}>Increase</button>
                <button onClick={this.props.sub}>Decrease</button>
            </div>
        )
    }
}

export default Button;