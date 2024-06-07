import Login from '../page/Login'
import Article from '../page/Article'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'
import NotFount from '../page/NotFount'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Board />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },

  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/article/:id',
    element: <Article></Article>
  },
  {
    path: '*',
    element: <NotFount />
  }
])

export default router