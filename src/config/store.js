import { createStore, combineReducers } from 'redux'
import cartReducer from '../components/Cart/reducer'

const rootReducer = combineReducers({
    cart: cartReducer
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION___ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store