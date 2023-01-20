import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import Home, { loader as homeLoader } from './Pages/Home';
import Accomodation, { loader as accomodationLoader } from './Pages/Accomodations';
import About from './Pages/About';
// import NotFound from './Components/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        // errorElement: <NotFound />,
        loader: homeLoader,
      },
      {
        path: '/Accomodations/:id',
        element: <Accomodation />,
        // errorElement: <NotFound />,
        loader: accomodationLoader,
      },
      {
        path: '/About',
        element: <About />,
        // errorElement: <NotFound />,
      },
      // {
      //   path: '*',
      //   element: <NotFound />,
      // },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);