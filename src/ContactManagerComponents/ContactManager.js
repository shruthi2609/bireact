import {useState,useEffect} from "react"
import axios from "axios"
const ContactManager=()=>{
    const [serverResponse,setResponse]=useState([])
    useEffect(
        ()=>{
            axios.get("http://localhost:3001/contactDetails").then((res)=>setResponse(res.data)).catch((Err)=>console.log(Err))
        },[]
    )
    return(
        <div>
            <h1>ContactManager</h1>
            {
                serverResponse.map((item)=>(
                    <div>
                    
                        <h1>{item.fname}</h1>
                        <p>{item.phone}</p>
                        <button>delete</button>
                    </div>
                ))
            }
            
        </div>

    )
}
export default ContactManager