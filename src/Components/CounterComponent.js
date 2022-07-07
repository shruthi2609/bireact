function CounterComponent(props){
    console.log(props)
    return(
        <div>
            <h1>Counter Component</h1>
            <button onClick={props.increment}>+</button>
            {props.count}
            <button onClick={props.decrement}>-</button>
          
        </div>
    )
}
export default CounterComponent