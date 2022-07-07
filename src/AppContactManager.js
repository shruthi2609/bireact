
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
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App(){
    return(
        <div>
            <BrowserRouter>
            <nav>
                <Link to="/create">create Contact</Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/users">See all conacts</Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/search">Search by ID</Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/delete">delete contact</Link>
            </nav>
            <Routes>
           <Route path="/create" element={<ContactCreate></ContactCreate>}></Route>
            <Route path="/users" element={<ContactManager></ContactManager>}></Route>
            <Route path="/search" element={<ContactManagerSearch></ContactManagerSearch>}></Route>
            <Route path="/delete" element={<ContactDelete></ContactDelete>}></Route>
            </Routes>
            
            </BrowserRouter>
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