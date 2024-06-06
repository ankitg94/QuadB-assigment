import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WheatherProvider } from './Context/Whether.jsx'
import {Provider} from "react-redux"
import store from './store/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <WheatherProvider> 
        <App/>
    </WheatherProvider>
    </Provider>
  </React.StrictMode>,
)
