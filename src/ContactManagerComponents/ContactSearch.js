import {useState,useEffect} from "react"
import axios from "axios"
const ContactManagerSearch=()=>{
    const [serverResponse,setResponse]=useState([])
    const [fname,setFname]=useState("")
    const [udata,setUdata]=useState([])
    useEffect(
        ()=>{
            axios.get("http://localhost:3001/contactDetails").then((res)=>setResponse(res.data)).catch((Err)=>console.log(Err))
        },[]
    )
    const handleChange=(e)=>{
        setFname(e.target.value)
    }

    const handleSearch=(e)=>{
        e.preventDefault()
        const userdata=serverResponse.filter((item)=>item.fname===fname)
        console.log(userdata)
        setUdata(userdata)
    }

    return(
        <div>
            <h1>ContactManager</h1>
            <form>
          Enter the fname :<input type="text" onChange={(e)=>handleChange(e)}></input>
          <button onClick={(e)=>handleSearch(e)}>search</button>
            </form>
           {
            udata.map((item)=>(
                <div>
                <h1>{item.fname}</h1>
                <p>{item.phone}</p>
            </div>
            ))
           }
           
            
        </div>

    )
}
export default ContactManagerSearch