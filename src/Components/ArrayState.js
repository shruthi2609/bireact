import {useState} from "react"
function ContactManager(){
const [id,setId]=useState()
const [fname,setFname]=useState("")
const [phno,setPhNumber]=useState("")
const [email,setEmail]=useState("")

const [contact,setContact]=useState([
    {
        id:0,
        fname:"john",
        number:92939239,
        email:"john@gmail.com"
    },
    {
        id:1,
        fname:"henry",
        number:92939239,
        email:"john@gmail.com"
    },
    {
        id:2,
        fname:"mary",
        number:92939239,
        email:"john@gmail.com"
    },

])
const handleID=(e)=>{
setId(e.target.value)
}
const handleUname=(e)=>{
    setFname(e.target.value)
}
const handleNumber=(e)=>{
    setPhNumber(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
const handleCreate=(e)=>{
    e.preventDefault()
    const obj={
        id:id,
        fname:fname,
        number:phno,
        email:email
    }
   // wrong coz updates without setContact method contact.push(obj)
   setContact([...contact,obj])
}
const deleteContact=(itemid)=>{
  const result=contact.filter((item)=>item.id!==itemid)
  
  setContact(result)
}
return(
<div>
    <form>
        Enter Id: <input type="text" onChange={(e)=>handleID(e)}></input>
        Enter Username:<input type="text" onChange={(e)=>handleUname(e)}></input>
        Enter number:<input type="text" onChange={(e)=>handleNumber(e)}></input>
        Enter Email:<input type="text" onChange={(e)=>handleEmail(e)}></input>
        <button onClick={(e)=>handleCreate(e)}>create</button>
    </form>
    {
        contact.map((item)=>(
            <div>
                <h2>{item.fname}</h2>
                <p>{item.number}</p>
                <p>{item.email}</p>
                <button onClick={()=>deleteContact(item.id)}>delete me</button>
            </div>
        ))
    }
</div>

)
}
export default ContactManager