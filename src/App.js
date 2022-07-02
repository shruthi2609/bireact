
import ContactManagerAPI from "./Components/ContactManager"
import FormComponent from "./Components/FormComponent"
import FunctionalState from "./Components/FunctionalState"
import SimpleClassComponent from "./Components/SimpleClassComponent"
import UseEffectComponent from "./Components/UseEffectComponent"
import WelcomePage from "./Components/WelcomePage"
import ContactCreate from "./ContactManagerComponents/ContactCreate"
import ContactDelete from "./ContactManagerComponents/ContactDelete"
import ContactManager from "./ContactManagerComponents/ContactManager"
import ContactManagerSearch from "./ContactManagerComponents/ContactSearch"
function App(){
    return(
        <div>
          {/*   <WelcomePage fname="johan" email="john@gmail.com" profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAxZm2ab3-Gb0kTCPzeuQYhxk30v28eWA1YpPK80&s"></WelcomePage>
          <WelcomePage fname="peter" email="peter@gmail.com" profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAxZm2ab3-Gb0kTCPzeuQYhxk30v28eWA1YpPK80&s"></WelcomePage>
          <SimpleClassComponent info="v19.0.0"></SimpleClassComponent>*/}
<ContactDelete></ContactDelete>
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