function FakeApp(props){
    console.log(props.fname)
    console.log(props.age)
return(
    <div>
    <h1>Fake App</h1>
    <p>{props.fname}</p>
    <p>{props.age}</p>
    </div>
)
}
export default FakeApp


