import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './config/store';
import LoadingView from './components/LoadingView'

import './index.css'
import App from './App'

const app = 
<Provider store={store}> 
    <PersistGate loading={<LoadingView />} persistor={persistor}>
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </PersistGate>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
