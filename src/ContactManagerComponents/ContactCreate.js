import {useState} from "react"
import axios from "axios"
const ContactCreate=()=>{
    const [sfname,setFname]=useState()
    const [sid,setId]=useState()
    const [sphone,setPhone]=useState()
    const [response,setResponse]=useState()
    const handleFname=(e)=>{
        setFname(e.target.value)
    }
    const handleID=(e)=>{
        setId(e.target.value)
    }
    const handlePhone=(e)=>{
        setPhone(e.target.value)
    }
    const addUser=(e)=>{
        e.preventDefault()
        const newdata={
            id:sid,
            fname:sfname,
            phone:sphone
        }
        axios.post("http://localhost:3001/contactDetails",newdata).then((Res)=>setResponse("created successfully")).catch((err)=>setResponse("not created - check inputs"))
    }
    return(
        <div>
        <h1> Add Contact </h1>
        <form>
        Username:<input type="text" onChange={(e)=>handleFname(e)}></input>
        ID:<input type="text" onChange={(e)=>handleID(e)}></input>
        Phone:<input type="text" onChange={(e)=>handlePhone(e)}></input>
        <button onClick={(e)=>addUser(e)}>create</button>
        </form>
        <h1>{response}</h1>
        </div>
    )
}
export default ContactCreate
