import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './store'
import 'remixicon/fonts/remixicon.css'
import { ToastContainer } from 'react-toastify'
import React from 'react'
import './config/config-i18n.service'

// styling
// import './layout/layout.style.css'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <ToastContainer />
        </Provider>,
    </React.StrictMode>
)

reportWebVitals()
