export default (state = { isLoading: false }, action) => {
    switch(action.type){
        case "SET_LOADING":
            return { isLoading: true }
        case "NOT_LOADING":
            return { isLoading: false }
        default: return state
    }
}