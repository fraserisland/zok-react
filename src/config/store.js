import { createStore, combineReducers } from 'redux'
import cartReducer from '../components/Cart/reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
}

const rootReducer = combineReducers({
    cart: cartReducer
})

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    pReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION___ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store);

