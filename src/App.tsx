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
import { Home } from '@components/Home';

const rootElement = <div id='route-outlet'><Outlet/></div>;

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: rootElement,
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
          element: <Home/> //aka layout protect this
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
