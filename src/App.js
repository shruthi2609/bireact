import FormComponent from "./Components/FormComponent"
import SimpleClassComponent from "./Components/SimpleClassComponent"
import WelcomePage from "./Components/WelcomePage"
function App(){
    return(
        <div>
          {/*   <WelcomePage fname="johan" email="john@gmail.com" profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAxZm2ab3-Gb0kTCPzeuQYhxk30v28eWA1YpPK80&s"></WelcomePage>
          <WelcomePage fname="peter" email="peter@gmail.com" profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAxZm2ab3-Gb0kTCPzeuQYhxk30v28eWA1YpPK80&s"></WelcomePage>
          <SimpleClassComponent info="v19.0.0"></SimpleClassComponent>*/}
          <FormComponent></FormComponent>
        </div>

    )
}
export default App



//example for imports and exports
/*export function Home(){
    return(
        <h1>Home Page</h1>
    )
}

function App(){
    return(
  <div>
  <h1>Hello React</h1>
  <h3>Simple react App</h3>
  </div>
    )
}

export default App*/