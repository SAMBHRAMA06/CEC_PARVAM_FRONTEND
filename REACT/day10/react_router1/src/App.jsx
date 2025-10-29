import React, {Children} from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Careers from './pages/Careers'

const router = createBrowserRouter([
{
  path:'/',
  element:<Layout/>,
  errorElement:<NotFound/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:'/projects',
      element:<Projects/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/careers',
      element:<Careers/>
    },
    {
      path:'/about',
      element:<About/>
    }
  ]
}
])

function App() {
  return <RouterProvider router={router} />
}

export default App