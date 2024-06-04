import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import NotFound from './pages/NotFound'
import {DataProvider} from './context/data.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
     {
      path: 'home',
      element: <Home/>,
     },
     {
      path: 'products',
      element : <Products />
     },
     {
      path: '*',
      element : <NotFound/>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
  </React.StrictMode>,
)
