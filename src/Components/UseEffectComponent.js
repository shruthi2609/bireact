import { useState,useEffect } from "react";

function UseEffectComponent(props){
    const [fname,setFname]=useState("")
    const [email,setEmail]=useState("")
    useEffect(
        ()=>console.log("inside useeffect"),[fname,props.prop1]
    )
    const updateName=()=>{
        setFname("john")
    }
   const updateEmail=()=>{
    setEmail("john@gmail.com")
   }
    return(
        <div>
            {console.log("render")}
            <h1>Use Effect Demo</h1>
            <h2>{fname}</h2>
            <h2>{email}</h2>
            <h1>{props.prop1}</h1>
            <button onClick={updateName}>update fname</button>
            <button onClick={updateEmail}>update Email</button>
        </div>
    )
}
export default UseEffectComponent