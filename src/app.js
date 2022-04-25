import React from "react";

import reactDom from "react-dom";
import "./app.css";
import Display from "./Display";
import Button from "./Button";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            value: 0
        }
    }

    addValue = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    decValue = () => {
        this.setState({
            value: this.state.value - 1
        })
    }
    render(){
        return(
            <div className="App">
                <div className="sub--header">
                    <Display value = {this.state.value}/>
                    <Button add = {this.addValue} sub = {this.decValue}/>
                </div>
            </div>
        )
    }
}

export default App;