import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import loadingReducer from './loadingReducer'

export default combineReducers({
    counterReducer,
    loadingReducer
})