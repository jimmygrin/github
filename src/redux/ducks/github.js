import axios from 'axios'
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const GET_USER = 'gh/GET_USER'
const GET_REPOS = 'gh/GET_REPOS'

const initialState  = {
user: {},
repos: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {...state, user: action.payload}
        case GET_REPOS:
            return {...state, repos: action.payload}  
        default:
            return initialState
    }
}


function getUser(username) {
    return dispatch => {
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            dispatch({
                type: GET_USER,
                payload: resp.data
            })
        })
    }
}

function getRepos(username) {
    return dispatch => {
        axios.get(`https://api.github.com/users/${username}/repos`).then(resp => {
            dispatch({
                type: GET_REPOS,
                payload: resp.data
            })
        })
    }
}

export function useGithub(username) {
    const dispatch = useDispatch()
    const user = useSelector(appState => appState.githubReducer.user)
    const repos = useSelector(appState => appState.githubReducer.repos)
    useEffect(() => {
        dispatch(getUser(username))
        dispatch(getRepos(username))
    }, [])

    return { user, repos }

}