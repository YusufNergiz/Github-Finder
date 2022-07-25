const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false 
            }
        case 'CHANGE_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload  
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default githubReducer;