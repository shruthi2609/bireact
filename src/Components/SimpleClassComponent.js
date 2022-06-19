import React from "react"
class SimpleClassComponent extends React.Component{
    
    constructor(props){
        super(props)
       // this.fname="john"
       this.state={
        fname:"johan",
       }

    }
    ChangeName=()=>{
        this.setState({fname:"john"})
        console.log("inside fun",this.state.fname)
    }
    render(){
       console.log("in render",this.state.fname)
        return(
            <div>
                <h1>Hello class component {this.props.info}</h1>
                <h2>{this.state.fname}</h2>
                <button onClick={this.ChangeName}>update</button>
            </div>
        )
    }

}
export default SimpleClassComponent