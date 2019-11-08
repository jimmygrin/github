import React from "react"

export default function(props) {
    return (
        
        <div className="repo">
            <div id="menu">
                <p>Overview</p>
                <p>Repositories {props.public_repos}</p>
                <p>Projects </p>
                <p>Stars </p>
                <p>Followers {props.followers}</p>
                <p>Following {props.following}</p>
            </div>
            <hr></hr>
            <div id="search">
            <input type="text" placeholder="Find a repository..."/>
            <select name="type">
                <option value="all">Type: ALL</option>
            </select>
            <select name="type">
                <option value="all">Language: ALL</option>
            </select>
            </div>
            <hr></hr>

            {props.repos.map((repo,i) => (
                <div key={"repo" + i}>
                    <h2><a href={repo.html_url}arget="_blank">{repo.name}</a></h2>
                    <p>{repo.language}</p>
                    <hr></hr>
                </div>    
            ))}
        </div>
        
    )
}