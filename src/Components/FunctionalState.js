import {useState} from "react"
function FunctionalState(){
    const [count,setCount]=useState(0) 
    const increment=()=>{
        setCount(count+1)
        
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
      
    }
    return(
        <div>
            <h1>counter Component</h1>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
  

}
export default FunctionalState