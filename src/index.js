import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//import {Home} from "./App"
import FakeApp from "./FakeApp"
//redux app dependencies
import {createStore} from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers/CountReducer"
const countstore=createStore(
reducer
)

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
<Provider store={countstore}>
<App></App>
</Provider>
  </>
)


