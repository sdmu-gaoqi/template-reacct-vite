import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/layout'
import Login from '../pages/login/login'
import Home from '../pages/home/home'

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])
