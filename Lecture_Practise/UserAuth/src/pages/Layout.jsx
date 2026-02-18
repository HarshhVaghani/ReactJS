import React from 'react'
import { PageRoutes } from './PageRoutes'
import ComponentsRoutes from '../components/ComponentsRoutes'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<ComponentsRoutes.Navbar/>,
    children:[
      {
        path:'/home',
        element:<PageRoutes.Home/>
      },
      {
        path:'/dashboard',
        element:<PageRoutes.Dashboard/>
      },
      {
        path:'/login',
        element:<PageRoutes.Login/>
      },
      {
        path:'/register',
        element:<PageRoutes.Register/>
      },
      {
        path:'*',
        element:<PageRoutes.Error/>
      }
    ]
  }
])

const Layout = () => {
  return (
    <RouterProvider router={router}/>
    )
}

export default Layout