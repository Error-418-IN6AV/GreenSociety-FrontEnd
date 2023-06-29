import React, {useState, createContext, useEffect} from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { UpdateDonacion } from './pages/donacion/UpdateDonacion';
import { DonacionPage } from './pages/donacion/DonacionPage';

export const AuthContext = createContext();
export const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
      name: '',
      username: '',
      role: ''
    })
    useEffect(()=> {
      let token = localStorage.getItem('token')
      if(token) setLoggedIn(true)
    }, [])
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />
      /* children: [
      ] */
    },
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/updatedonacion/:id',
      element: <UpdateDonacion/>
    },
    {
      path: '/donacion',
      element: <DonacionPage/>
    }
  ])
  
  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
        <RouterProvider router={routes} />
      </AuthContext.Provider>
  )
}
