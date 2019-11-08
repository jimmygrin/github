import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import { useGithub } from '../redux/ducks/github'
import User from './User'
import Repos from './Repos'
import Main from './Main'
import 'font-awesome/css/font-awesome.min.css'



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
     <>
     <div id="topcontainer">
     <div id="leftmenu">
     <i class="fa fa-github"></i>
      <input type="text" placeholder="Search or jump to.."/>
      <p>Pull requests</p>
      <p>Issues</p>
      <p>Marketplace</p>
      <p>Explore</p>
       </div> 

      <div id="rightmenu">
      <i class="fa fa-bell"></i>
      <i class="fa fa-plus"></i>
      <i class="fa fa-sort-down"></i>
      {/* <img src={props.avatar_url} /> */}
      </div> 
      
      </div>
      <div className="container">
      
      <div id="main">
        
        <User {...user}/>
        <Repos repos={repos} {...user} />
      
      </div>
      </div>
  </>
  )
}

export default Wrap
