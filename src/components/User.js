import React from 'react'

export default function (props) {
    
    return  (
        <div className="user">
              
                <img src={props.avatar_url} />
                <h1>{props.name}</h1>
                <h2>{props.login}</h2>
                <p>Follow</p>
        </div>
    )

}