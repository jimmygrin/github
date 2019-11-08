import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import { useGithub } from '../redux/ducks/github'
import User from './User'
import Repos from './Repos'
import Main from './Main'



function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}



function App() {

  const { user, repos } = useGithub('jimmygrin')
  
  return (
     
      <div className="container">
      
      <div id="main">

        <User {...user}/>
        <Repos repos={repos} {...user} />
      
      </div>
      </div>
  
  )
}

export default Wrap
