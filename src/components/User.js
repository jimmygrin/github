import React from 'react'

export default function (props) {
    
    return  (
        <div>
                <h1>Login: {props.login}</h1>
                <img src={props.avatar_url} />
        </div>
    )

}