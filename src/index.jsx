import React, { useState, createContext, useEffect } from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/Login/LoginPage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { ListCollaborator } from './pages/Collaborator/ListCollaborator';
import { CollaboratorPage } from './pages/Collaborator/CollaboratorPage';
import { UpdateUsers } from './pages/Users/UpdateUsers';
import { UsersPage } from './pages/Users/UsersPage';
import { ListUsers } from './pages/Users/ListUsers';
import { UpdateCollaborator } from './pages/Collaborator/UpdateCollaborator';
import { ForoPage } from './pages/Foro/ForoPage';
import { Foro } from './pages/Foro/Foro';
import { UpdateForo } from './pages/Foro/UpdateForo';
import { ComentaryTable } from './pages/Comentaries/ComentaryTable';
import { PageCategory } from './pages/Category/PageCategory.jsx'
import { PageProduct } from './pages/Product/PageProduct.jsx'
import { UpdateProduct } from './pages/Product/UpdateProduct.jsx'
import { Product } from './pages/Product/Product.jsx'
import { Category } from './pages/Category/Category.jsx'
import { Image } from './pages/Product/Image'
import { DetallePage } from './pages/detalleDonacion/DetallePage'
import { UpdateDetalle } from './pages/detalleDonacion/UpdateDetalle'
import { DonacionPage } from './pages/donacion/DonacionPage'
import { UpdateDonacion } from './pages/donacion/UpdateDonacion'
import { Donation } from './pages/donacion/Donation';
import { DetalleDonacionPage } from './pages/detalleDonacion/DetalleDonacionPage'
import { ComprasPage } from './pages/Compra/ComprasPage'
import { Bill } from './pages/Bill/Bill';
import { BillPage } from './pages/Bill/BillPage';
import { EventPage } from './pages/Event/EventPage';
import { ListEvent } from './pages/Event/ListEvent';
import { UpdateEvent } from './pages/Event/UpdateEvenet';
import { Estadistic } from './pages/Estadistic/Estadistic';
import { ListEstadistic } from './pages/Estadistic/ListEstadistic';
import { Estadisticc } from './pages/Estadistic/Estadisticc';

export const AuthContext = createContext();

export const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [dataUser, setDataUser] = useState({
    name: '',
    surname: '',
    username: '',
    role: '',
    _id: ''
  })
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) setLoggedIn(true)

    //Token abierto
    let user = JSON.parse(localStorage.getItem('ClaveSuperSecreta'))
    if (user) {
      setDataUser(user)
    }
  }, [])

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/register',
          element: <RegisterPage></RegisterPage>
        },
        {
          path: '/login',
          element: <LoginPage></LoginPage>
        },
        {
          path: '/dashboard',
          element: loggedIn ? <DashboardPage /> : <LoginPage />,
          children: [
            {
              path: 'foro',
              element: <Foro></Foro>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <ForoPage></ForoPage>
                },
              ]
            },
            {
              path: 'updateForo/:id',
              element: <UpdateForo></UpdateForo>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <UpdateForo></UpdateForo>
                },
              ]
            },
            {
              path: 'collaborator',
              element: <CollaboratorPage></CollaboratorPage>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <ListCollaborator></ListCollaborator>
                },
                {
                  path: 'updateCollaborator/:id',
                  element: <UpdateCollaborator />
                },
              ]
            },
            {
              path: 'users',
              element: <UsersPage />,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <ListUsers />
                },
                {
                  path: 'UpdateUsers/:id',
                  element: <UpdateUsers />
                },
              ]
            },
            {
              path: 'comentary/:id',
              element: <ComentaryTable></ComentaryTable>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <ComentaryTable></ComentaryTable>,
                },
              ]
            },
            {
              path: 'category',
              element: <Category></Category>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <PageCategory></PageCategory>
                }
              ]
            },
            {
              path: 'product',
              element: <Product></Product>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <PageProduct></PageProduct>
                },
                {
                  path: 'UpdateProduct/:id',
                  element: <UpdateProduct />
                },
                {
                  path: 'image/:id',
                  element: <Image></Image>
                },
                {
                  path: 'compr/:id',
                  element: <ComprasPage></ComprasPage>
                },
              ]
            },
            {
              path: 'donation',
              element: <Donation></Donation>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <DonacionPage></DonacionPage>
                },
                {
                  path: 'updateDonacion/:id',
                  element: <UpdateDonacion />
                }
              ]
            },
            {
              path: 'donationdatail',
              element: <DetalleDonacionPage></DetalleDonacionPage>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <DetallePage></DetallePage>
                },
                {
                  path: 'updateDetalle/:id',
                  element: <UpdateDetalle />
                }
              ]
            },
            {
              path: 'compra',
              element: <BillPage></BillPage>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <BillPage></BillPage>
                },
              ]
            },
            {
              path: 'compras/:id',
              element: <Bill></Bill>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <Bill></Bill>
                },
              ]
            },
            {
              path: 'event',
              element: <EventPage></EventPage>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <ListEvent />
                },
                {
                  path: 'updateEvent/:id',
                  element: <UpdateEvent />
                }
              ]
            },
            ,
            {
              path: 'estadistic',
              element: <Estadistic></Estadistic>,
              children: [
                {
                  path: '',
                  exact: true,
                  element: <ListEstadistic></ListEstadistic>
                },
                {
                  path: 'estadisticc',
                  element: <Estadisticc />
                }
              ]
            },
          ]
        }
      ]
    }
  ])
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  )
}

