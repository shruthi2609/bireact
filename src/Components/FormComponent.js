import React from "react";
class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            message:""
        }
    }
    getUsername=(ev)=>{
       this.setState({username:ev.target.value})
    }
    getPassword=(ev)=>{
        this.setState({password:ev.target.value})
    }
    handleLogin=(e)=>{
        e.preventDefault()
        if(this.state.username==="john"&&this.state.password==="admin123"){
            this.setState({message:`Hi  ${this.state.username} ! , you have successfully logged in`})
           
        }
        else{
            this.setState({message:"invalid credentials"})
        }
    }
    render(){
        return(
            <form>
               Username: <input type="text" onChange={(e)=>this.getUsername(e)}></input>
               Password:<input type='text' onChange={(e)=>this.getPassword(e)}></input>
               <button onClick={(e)=>this.handleLogin(e)}>login</button>
               <p>{this.state.message}</p>
            </form>
        )
    }
}
export default FormComponent