import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export function GithubProvider({children}) {

    const github_api = "https://api.github.com";

    const initialState = {
        users: [],
        user: {},
        loading: false,
        currentUser: 'U'
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = async (input) => {
        setLoading();
        const response = await fetch(`${github_api}/search/users?q=${input}`);
        const data = await response.json();
        dispatch({
            type: "GET_USERS",
            payload: data
        })
        
    }
    console.log(state.users)
    // set Loading to true
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    const loginCurrentUser = event => {
        if (document.getElementById('currentUserInput').value !== '') {
            dispatch({
                type: 'CHANGE_CURRENT_USER',
                payload: document.getElementById('currentUserInput').value
            })
        }
    }

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    const getUser = async (login) => {
        setLoading();
        const response = await fetch(`${github_api}/users/${login}`)

        if (response.status === 404) {
            window.location = '/notfound'
        }
        else {
            const data = await response.json();
            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }
    }

    return <GithubContext.Provider value={{loading: state.loading, users: state.users, user: state.user, searchUsers, loginCurrentUser, currentUser: state.currentUser, clearUsers, getUser}}>{children}</GithubContext.Provider>
}

export default GithubContext;