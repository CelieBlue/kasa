import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Accomodation from './Pages/Accomodation';
import NotFound from './Components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: 'Accomodation/:id',
        element: <Accomodation />,
        errorElement: <NotFound />,
      },
      {
        path: '/About',
        element: <About />,
        errorElement: <NotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);