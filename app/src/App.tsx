import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

//import logo from './assets/logo.svg';
//import { Counter } from '@components/Counter';
import { Login } from '@components/Login';
import '@styles/App.scss';
import { Layout } from '@pages/Layout';
import { AuthRoute } from '@components/AuthRoute';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Outlet/>,
      errorElement: <div>error</div>,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: 'login',
          element: <Navigate to='/'/>
        },
        {
          path: 'home',
          element: (
            <AuthRoute>
              <Layout/>
            </AuthRoute>
          )
        }
      ]
    },
    {
      path: '*',
      element: <div>Not found</div>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
