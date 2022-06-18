function WelcomePage(props){
    const {fname,email,profileimg}=props
    return(
        <div>
            <h1> Welcome {fname}</h1>
            <p>Your email id is : {email}</p>
            <img src={profileimg}></img>
            <form>
                <label>enter your search item</label>
                <input type="text"></input>
                <input type="submit"></input>
            </form>

        </div>
    )
}
export default WelcomePage