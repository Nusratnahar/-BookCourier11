import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Register from './Pages/Register.jsx';
import Root from './Layouts/Root.jsx';
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';
import PrivateRoute from './Pages/Shared/PrivateRoute.jsx';
import AuthProvider from './Context/AuthProvider.jsx';




const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   children: [
    {
      index: true,
      Component:Home,
    },
    // {
    //   path: '/plants',
    //   Component: Plants,
    // },
    // {
    //   path: '/plants/:plantId',
    //   element: 
    //     <PrivateRoute>
    //       <PlantDetails></PlantDetails>
    //     </PrivateRoute>
    //   ,
    //   loader: ()=> fetch('/data.json').then(res => res.json()),
    // },
   
    {
      path: '/login',
      Component: Login,

    },
    {
      path: '/register',
      Component: Register,

    },
    // {
    //   path: '/profile',
    //   element: <PrivateRoute>
    // <Profile></Profile>
    //   </PrivateRoute>,
    
    // },
   ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
