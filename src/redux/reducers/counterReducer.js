const initialState = { counter: 20, data: "_____"}

export default ( state = initialState, action) => {
    switch(action.type) {
        case 'INCREASE_ASYNC':
            return { ...state, counter: state.counter+1, data: action.payload }
        case 'DECREASE':
            return { ...state, counter: state.counter-1, data: action.payload }
        case 'RESET':
            return { ...state, counter: 0 }       
        default:
            return state
    }
}