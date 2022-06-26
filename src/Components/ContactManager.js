import { useEffect, useState } from "react";
import axios from "axios"
function ContactManagerAPI(){
const [serverresponse,setResponse]=useState([])
const [errState,setError]=useState(false)

useEffect(
    ()=>{
       /* fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{return res.json()}).then((res)=>setResponse(res)).catch((err)=>setError(true))*/

       axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setResponse(res.data)).catch((err)=>setError(true))


    },[]
)
/*const fetchUserDetails=(e)=>{
e.preventDefault()
fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{return res.json()}).then((res)=>setResponse(res)).catch((err)=>setError(true))
}*/
return(
    <div>
        {console.log(serverresponse)}
      { /* <button onClick={(e)=>fetchUserDetails(e)}>fetch user details</button>*/}
        {
            errState?<h1>Network call failed</h1>:
                serverresponse.map((item)=>(
                    <div>
                        <h1>{item.username}</h1>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.address.city}</p>
                    </div>
                ))
            
        }

    </div>
)
}
export default ContactManagerAPI