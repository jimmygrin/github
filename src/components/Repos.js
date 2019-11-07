import React from "react"

export default function(props) {
    return (
        <div>
            {props.repos.map((repo,i) => (
                <div key={"repo" + i}>
                    <h2>Name: {repo.full_name}</h2>
                    <a href={repo.html_url} target="_blank">
                        {repo.html_url}
                    </a>
                </div>    
            ))}
        </div>
    )
}