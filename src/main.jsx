import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import AppliedJobs from './components/Applied-Jobs/AppliedJobs'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
