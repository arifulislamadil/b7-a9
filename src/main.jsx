import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import AppliedJobs from './components/Applied-Jobs/AppliedJobs'
import JobDetails from './components/jobDetails/JobDetails'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import ErrorPage from './components/ErrorPage'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=>fetch("/jobsList.json")
      },
      {
        path:"/statistics",
        element:<Statistics/>
      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs/>,
        loader:()=>fetch("/jobsList.json")
      },

      {
        path:"/job/:id",
        element:<JobDetails/>,
        loader:()=>fetch("/jobsList.json"),
        
      },
      {
        path:"/blog",
        element:<Blog/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
