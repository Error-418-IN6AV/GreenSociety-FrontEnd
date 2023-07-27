import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PageCategory } from './pages/Category/PageCategory.jsx'
import { PageProduct } from './pages/Product/PageProduct.jsx'
import { UpdateProduct } from './pages/Product/UpdateProduct.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/category',
        element: <PageCategory/>,
      },{
        path:'/product',
        element: <PageProduct></PageProduct>
      },{
        path: 'product/update/:id',
        element: <UpdateProduct></UpdateProduct>
      }
      ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
