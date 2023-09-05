import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Movie } from './components/Movie';
import { Cart } from './components/Cart';
import { Confirmation } from './components/Confirmation';
import { Home } from './components/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movie/:id',
        element: <Movie />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/confirmation',
        element: <Confirmation />,
      },
    ],
  },
]);