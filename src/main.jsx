import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import AppliedJobs from './components/Applied-Jobs/AppliedJobs'
import JobDetails from './components/jobDetails/JobDetails'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=>fetch("/jobsList.json")
      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs/>
      },

      {
        path:"/job/:id",
        element:<JobDetails/>,
        loader:()=>fetch("/jobsList.json"),
        
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
