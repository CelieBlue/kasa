import React from 'react';
import ReactDOM from 'react-dom';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path:'/About',
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path:'*',
    element: <NotFound />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);