import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import { useGithub } from '../redux/ducks/github'
import User from './User'
import Repos from './Repos'


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
        <User {...user}/>
        <Repos repos={repos}/>
      </div>
  
  )
}

export default Wrap
