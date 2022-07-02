import {useState} from "react"
import axios from "axios"
const ContactDelete=()=>{
   
    const [sid,setId]=useState()
    
    const [response,setResponse]=useState()
   
    const handleID=(e)=>{
        setId(e.target.value)
    }
    
    const deleteUser=(e)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3001/contactDetails/${sid}`).then((Res)=>setResponse("deleted successfully")).catch((err)=>setResponse("not deleted - check inputs"))
    }
    return(
        <div>
        <h1> Delete Contact </h1>
        <form>
        ID:<input type="text" onChange={(e)=>handleID(e)}></input>
        <button onClick={(e)=>deleteUser(e)}>delete</button>
        </form>
        <h1>{response}</h1>
        </div>
    )
}
export default ContactDelete
