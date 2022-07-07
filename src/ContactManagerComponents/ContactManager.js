import {useState,useEffect} from "react"
import axios from "axios"
const ContactManager=()=>{
    const [serverResponse,setResponse]=useState([])
    const [deleteState,setResponseDelete]=useState("")
    useEffect(
        ()=>{
            axios.get("http://localhost:3001/contactDetails").then((res)=>setResponse(res.data)).catch((Err)=>console.log(Err))
        },[deleteState]
    )
    const deleteUser=(sid)=>{
        axios.delete(`http://localhost:3001/contactDetails/${sid}`).then((Res)=>setResponseDelete("deleted successfully")).catch((err)=>setResponseDelete("not deleted - check inputs"))
    }
    return(
        <div>
            <h1>ContactManager</h1>
            {
                serverResponse.map((item)=>(
                    <div>
                    
                        <h1>{item.fname}</h1>
                        <p>{item.phone}</p>
                        <button onClick={()=>deleteUser(item.id)}>delete</button>
                    </div>
                ))
            }
            
        </div>

    )
}
export default ContactManager