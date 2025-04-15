
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Details from './Components/details.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/todo/:id' element={<Details />}/>
        </Routes>
    
    </Provider>
    </BrowserRouter>

    

)
